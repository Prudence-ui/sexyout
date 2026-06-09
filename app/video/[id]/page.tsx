"use client";

import ExoVideoSlider from "@/app/components/ExoVideoSlider";
import ExoNativeWidget from "@/app/components/ExoNativeWidget";
import ExoBannerBottom from "@/app/components/ExoBannerBottom";
import ExoBanner from "../../components/ExoBanner";
import { videos } from "../../../data/videos";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function VideoPage() {

const params = useParams();

const id = Number(params?.id);

const video = videos.find(
v => v.id === id
);

if (!video) {

return (

<div className="min-h-screen bg-black text-white flex items-center justify-center">

<h1 className="text-3xl">
Vidéo introuvable
</h1>

</div>

)

}

const similarVideos = videos
.filter(

v =>
v.categorie === video.categorie &&
v.id !== video.id

)
.slice(0,6);

return (

<main className="min-h-screen bg-[#111] text-white">

<header className="border-b border-gray-800 p-4">

<h1 className="text-3xl font-bold">

SexyOut

</h1>

</header>

<div className="max-w-7xl mx-auto p-5">


<div className="mb-12 mt-4 flex justify-center">
  <ExoBanner />
</div>


<h1 className="text-2xl md:text-4xl font-bold mb-4">

{video.titre}

</h1>



<div className="aspect-video bg-black rounded overflow-hidden">

<video
controls
className="w-full h-full"
>

<source
src={video.source}
type="video/mp4"
/>

Votre navigateur ne supporte pas cette vidéo

</video>

</div>

<div className="mt-6">
  <ExoVideoSlider />
</div>

<div className="mt-4">


<p className="text-pink-500">
🏷️ {video.categorie}
</p>

</div>

<div className="mt-8 mb-8 flex justify-center">

  <ExoBannerBottom />

</div>




<ExoNativeWidget />


<h2 className="text-2xl font-bold mt-10 mb-5">

Vidéos similaires

</h2>

<div className="
grid
grid-cols-2
md:grid-cols-3
lg:grid-cols-6
gap-4
">

{similarVideos.map((item,index) => (

<div key={item.id}>

{index===3 && (

<div className="col-span-2 md:col-span-3 lg:col-span-6 rounded-xl bg-[#1a1a1a] p-6 text-center border border-gray-700">

<p className="text-pink-500 font-bold">
📢 Publicité sponsorisée
</p>

</div>

)}

<Link
href={`/video/${item.id}`}
className="
bg-[#1a1a1a]
rounded
overflow-hidden
hover:scale-105
transition
block
"
>

<div className="relative h-[120px]">

<img
src={item.image}
alt={item.titre}
className="w-full h-full object-cover"
/>

<div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded">

{item.duree || "0:00"}

</div>

</div>

<div className="p-2">

<h3 className="text-sm font-semibold line-clamp-2">

{item.titre}

</h3>

</div>

</Link>

</div>

))}

</div>

<div className="flex justify-between mt-10">

<Link
href={`/video/${video.id > 1 ? video.id - 1 : video.id}`}
className="bg-[#222] px-4 py-3 rounded"
>
⬅ Prev
</Link>

<Link
href={`/video/${video.id < videos.length ? video.id + 1 : video.id}`}
className="bg-pink-600 px-4 py-3 rounded"
>
Next ➜
</Link>

</div>

<footer className="bg-[#1b1b1b] p-8 mt-10">

<ul className="space-y-2 text-pink-500">

<li>
<Link href="/">
Accueil
</Link>
</li>

<li>
<Link href="/privacy">
Privacy Policy
</Link>
</li>

<li>
<Link href="/conditions">
Conditions
</Link>
</li>

<li>
<Link href="/contact">
Contact
</Link>
</li>

</ul>

</footer>

</div>

</main>

)

}