import { MetadataRoute } from "next";
import { videos } from "../data/videos";

export default function sitemap(): MetadataRoute.Sitemap {

return [

{
url: "https://sexyout.com",
lastModified: new Date(),
},

...videos.map((video)=>({

url: `https://sexyout.com/video/${video.id}`,

lastModified: new Date(),

}))

];

}