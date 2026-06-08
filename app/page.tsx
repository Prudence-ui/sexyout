"use client";

import { useState } from "react";
import { videos } from "../data/videos";

const categories = [
  "Toutes",
  "Ebony",
  "Nude",
  "Car",
  "Sextape",
  "Black" 
];

export default function Home() {

const [search,setSearch]=useState("");
const [selectedCategory,setSelectedCategory]=useState("Toutes");
const [menuOpen,setMenuOpen]=useState(false);
const [page,setPage]=useState(1);

const videosPerPage=6;

const filtered=videos.filter(video=>{

const searchMatch=
video.titre
.toLowerCase()
.includes(
search.toLowerCase()
);

const categoryMatch=
selectedCategory==="Toutes"
? true
: video.categorie===selectedCategory;

return searchMatch && categoryMatch;

});

const totalPages=Math.ceil(
filtered.length/videosPerPage
);

const start=
(page-1)*videosPerPage;

const currentVideos=
filtered.slice(
start,
start+videosPerPage
);

return(

<main className="min-h-screen bg-[#111] text-white">

<header className="border-b border-gray-800 p-4">

<div className="flex justify-between items-center">

<h1 className="text-2xl md:text-4xl font-bold">
SexyOut
</h1>

<button
onClick={()=>setMenuOpen(!menuOpen)}
className="text-3xl"
>
☰
</button>

</div>

</header>

{menuOpen && (

<div className="bg-[#1a1a1a] p-5">

<ul className="space-y-4">

<li>
<a
href="/"
className="hover:text-pink-500"
>
🏠 Accueil
</a>
</li>

<li>
<a
href="/"
className="hover:text-pink-500"
>
🔥 Populaires
</a>
</li>

<li>
<a
href="/"
className="hover:text-pink-500"
>
📂 Catégories
</a>
</li>

<li>
<a
href="/contact"
className="hover:text-pink-500"
>
✉️ Contact
</a>
</li>

<li>
<a
href="/privacy"
className="hover:text-pink-500"
>
🔒 Privacy Policy
</a>
</li>

<li>
<a
href="/conditions"
className="hover:text-pink-500"
>
📜 Conditions
</a>
</li>

</ul>

</div>

)}

<div className="p-4">

<div className="flex">

<input
type="text"
placeholder="Rechercher..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="flex-1 bg-[#222] p-4 outline-none"
/>

<button className="bg-pink-600 px-5">
🔍
</button>

</div>

</div>

<div className="px-4 py-2 flex gap-3 overflow-x-auto">

{categories.map(cat=>(

<button
key={cat}
onClick={()=>{

setSelectedCategory(cat);
setPage(1);

}}
className={`px-4 py-2 rounded whitespace-nowrap ${
selectedCategory===cat
?"bg-pink-600"
:"bg-[#222]"
}`}
>

{cat}

</button>

))}

</div>

<div className="m-4 rounded-xl bg-[#1a1a1a] h-[100px] md:h-[120px] flex items-center justify-center border border-gray-700">

<p className="text-pink-500 text-lg font-bold">
📢 Bannière publicitaire
</p>

</div>

<section
className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
xl:grid-cols-5
gap-6
p-4
"
>

<div className="my-6 rounded-xl bg-[#1a1a1a] p-6 text-center border border-gray-700">

<p className="text-pink-500 font-bold">

📢 Zone publicité entre vidéos

</p>

</div>

{currentVideos.map((video)=>(

<a
href={`/video/${video.id}`}
key={video.id}
className="
bg-[#1a1a1a]
rounded-lg
overflow-hidden
hover:scale-105
transition
duration-300
cursor-pointer
block
shadow-lg
"
>

<div className="relative h-[220px] sm:h-[180px] overflow-hidden">

<img
src={video.image}
alt={video.titre}
className="w-full h-full object-cover"
/>

<div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded">
{video.duree}
</div>

<div className="absolute top-2 left-2 bg-pink-600 px-2 py-1 text-xs rounded">
HD
</div>

<div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition"></div>

</div>

<div className="p-4">

<h2 className="font-semibold text-sm md:text-base">
{video.titre}
</h2>


<p className="text-pink-500 text-sm">
🏷️ {video.categorie}
</p>

</div>

</a>

))}

</section>

<div className="flex justify-center flex-wrap gap-3 p-6">

<button
disabled={page===1}
onClick={()=>setPage(page-1)}
className="bg-[#222] px-4 py-3"
>
Prev
</button>

{Array.from(
{length:totalPages},
(_,i)=>(

<button
key={i}
onClick={()=>setPage(i+1)}
className={
page===i+1
?"bg-pink-600 px-4 py-3"
:"bg-[#222] px-4 py-3"
}
>
{i+1}
</button>

))
}

<button
disabled={page===totalPages}
onClick={()=>setPage(page+1)}
className="bg-[#222] px-4 py-3"
>
Next
</button>

</div>

<footer className="bg-[#1b1b1b] p-8">

<div className="text-center">

<h2 className="text-xl font-bold mb-4">
SexyOut
</h2>

<ul className="space-y-2 text-pink-500">

<li>
<a href="/">
Accueil
</a>
</li>

<li>
<a href="/contact">
Contact
</a>
</li>

<li>
<a href="/privacy">
Privacy Policy
</a>
</li>

<li>
<a href="/conditions">
Conditions
</a>
</li>

</ul>

<p className="mt-6 text-gray-400 text-sm">

© 2025 SexyOut — Tous droits réservés

</p>

</div>

</footer>

</main>

)

}