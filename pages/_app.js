// pages/_app.js

import '../styles/globals.css';
import CookieBanner from '../components/CookieConsent';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const GA_TRACKING_ID = 'G-B8X5B8DK83'; // Replace with your Google Analytics Tracking ID

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track page views after user consents
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const onUserAcceptCookies = () => {
    // Initialize Google Analytics script after user consent
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  };

  return (
    <>
      {/* Google Analytics script, loaded only after the page is interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          `,
        }}
      />

      {/* Cookie Banner with onAccept callback */}
      <CookieBanner onAccept={onUserAcceptCookies} />

      <Component {...pageProps} />
    </>
  );
}
