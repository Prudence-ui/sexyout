"use client";

import Script from "next/script";

export default function ExoNativeWidget() {

return(

<div className="mt-8 mb-8 flex justify-center overflow-hidden">

<Script
src="https://a.magsrv.com/ad-provider.js"
strategy="afterInteractive"
/>

<ins
className="eas6a97888e20"
data-zoneid="5945506"
></ins>

<Script id="exo-native-init">

{`
(AdProvider = window.AdProvider || []).push({
serve:{}
});
`}

</Script>

</div>

)

}