"use client";

import { useEffect } from "react";

export default function ExoBanner() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://a.magsrv.com/ad-provider.js";
    script1.async = true;
    script1.type = "application/javascript";

    document.body.appendChild(script1);

    script1.onload = () => {
      (
        (window as any).AdProvider =
          (window as any).AdProvider || []
      ).push({
        serve: {}
      });
    };
  }, []);

  return (
    <ins
      className="eas6a97888e2"
      data-zoneid="5945156"
    ></ins>
  );
}