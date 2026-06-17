import { MetadataRoute } from "next";
import { videos } from "../data/videos";

export default function sitemap(): MetadataRoute.Sitemap {

const videoPages: MetadataRoute.Sitemap = videos.map(
(video)=>({

url:
`https://sexyout.com/video/${video.id}`,

lastModified:
new Date(),

changeFrequency:
"daily" as const,

priority:
0.8

})
);

return [

{
url:
"https://sexyout.com",

lastModified:
new Date(),

changeFrequency:
"daily",

priority:
1
},

...videoPages

];

}