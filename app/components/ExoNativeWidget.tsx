"use client";

import Script from "next/script";

export default function ExoNativeWidget() {

return(

<div className="mt-8 mb-8 flex justify-center">

{/* ExoClick Native */}
<script
async
src="https://a.magsrv.com/ad-provider.js"
></script>

<ins
className="eas6a97888e20"
data-zoneid="5945506"
></ins>

<Script id="exo-native">
{`
(AdProvider = window.AdProvider || []).push({"serve": {}});
`}
</Script>

{/* Hilltop fallback */}
<Script id="hilltop-native">

{`
(function(pi){
var d=document,
s=d.createElement("script"),
l=d.scripts[d.scripts.length-1];

s.settings=pi||{};

s.src="//grounded-opposite.com/b/XLV.sddsG/l/0ZYUWOcP/reTmx9Su/Z/UklLk/P/TlcsxMNaDMI/xDMFDHk/tJNozQEo0/Mqj/EQxlM/wq";

s.async=true;

s.referrerPolicy="no-referrer-when-downgrade";

l.parentNode.insertBefore(s,l);

})({})
`}

</Script>

</div>

)

}