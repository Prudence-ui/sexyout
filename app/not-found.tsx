export default function NotFound() {

return (

<main className="min-h-screen bg-[#111] text-white flex items-center justify-center p-6">

<div className="text-center">

<h1 className="text-7xl font-bold text-pink-600 mb-4">
404
</h1>

<h2 className="text-2xl font-bold mb-4">
Page introuvable
</h2>

<p className="text-gray-400 mb-8">
La page que vous recherchez n'existe pas.
</p>

<a
href="/"
className="
bg-pink-600
px-6
py-3
rounded
hover:bg-pink-700
transition
inline-block
"
>
Retour à l'accueil
</a>

</div>

</main>

)

}