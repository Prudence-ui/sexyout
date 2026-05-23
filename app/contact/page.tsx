export default function Contact() {

return(

<main className="min-h-screen bg-[#111] text-white">

<div className="max-w-4xl mx-auto p-6">

<h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">

Contact

</h1>

<div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">

<div className="mb-5">

<label className="block mb-2 text-gray-300">

Nom

</label>

<input
type="text"
placeholder="Votre nom"
className="
w-full
bg-[#222]
border
border-gray-700
rounded-lg
p-4
outline-none
focus:border-pink-600
"
/>

</div>

<div className="mb-5">

<label className="block mb-2 text-gray-300">

Email

</label>

<input
type="email"
placeholder="Votre email"
className="
w-full
bg-[#222]
border
border-gray-700
rounded-lg
p-4
outline-none
focus:border-pink-600
"
/>

</div>

<div>

<label className="block mb-2 text-gray-300">

Message

</label>

<textarea
placeholder="Votre message"
className="
w-full
h-[180px]
bg-[#222]
border
border-gray-700
rounded-lg
p-4
outline-none
focus:border-pink-600
"
/>

</div>

<button
className="
mt-6
w-full
bg-pink-600
hover:bg-pink-700
transition
rounded-lg
p-4
font-bold
"
>

Envoyer

</button>

</div>

</div>

</main>

)

}