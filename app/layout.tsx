import "./globals.css";

export const metadata = {

metadataBase:new URL("https://monsitevideo.com"),

title:"MonSiteVideo - Vidéos sport, gaming et divertissement",

description:
"Regardez des vidéos sport, gaming, musique, films et plus encore.",

keywords:[
"vidéos",
"sport",
"gaming",
"musique",
"films"
],

openGraph:{

title:"MonSiteVideo",

description:
"Regardez des vidéos sport et divertissement",

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