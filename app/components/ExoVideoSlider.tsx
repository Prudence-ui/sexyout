"use client";

import Script from "next/script";

export default function ExoVideoSlider() {
  return (
    <>
      <Script
        async
        src="https://a.magsrv.com/ad-provider.js"
        strategy="afterInteractive"
      />

      <ins
        className="eas6a97888e31"
        data-zoneid="5946070"
      ></ins>

      <Script id="exo-video-slider">
        {`
          (AdProvider = window.AdProvider || []).push({"serve": {}});
        `}
      </Script>
    </>
  );
}