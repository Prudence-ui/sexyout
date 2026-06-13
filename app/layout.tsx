import "./globals.css";

export const metadata = {

metadataBase:new URL("https://sexyout.com"),

title:"SexyOut - Vidéos sex, porno et desire sexuelle",

description:
"Regardez des vidéos porno, sextape, nude, baise et plus encore.",

keywords:[
"Nude",
"Car",
"Sextape",
"Ebony",
"Black"
],

openGraph:{

title:"SexyOut",

description:
"Regardez des vidéos pornographique et sextape",

images:[
{
url:"/logo-share.jpg",
width:1200,
height:630
}
]

}

};

export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return(

<html lang="fr">

<body>

{children}


</body> 

</html>

)

}