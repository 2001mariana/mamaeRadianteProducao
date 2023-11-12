import { controlBrowserLanguage } from '@/components/LanguageControl/LanguageControlUtils';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import * as fbq from '../lib/fpixel'
import Script from 'next/script';

export const LanguageContext = createContext<{updateContext: (formatedBrowserLanguage: "ES" | "ENG" | "PT") => void, contextValue: 'PT' | 'ES' | 'ENG' | ''}>({updateContext: () => {}, contextValue: ''});

export default function App({ Component, pageProps }: AppProps) {
    const [defaultBrowserLanguage, setDefaultBrowserLanguage] = useState<'PT' | 'ES' | 'ENG' | ''>('')
    const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
    useEffect(() => {
        const languageBrowser = window.navigator ? window.navigator.language : '';
        const formatedBrowserLanguage = controlBrowserLanguage(languageBrowser)
        setDefaultBrowserLanguage(formatedBrowserLanguage)
    }, [])   

    const updateSelectedLanguage = (formatedBrowserLanguage: "ES" | "ENG" | "PT") => {
        setDefaultBrowserLanguage(formatedBrowserLanguage)
    }

    return (
            <div className="App Home">
                
                <Head>
                    <title>Mamãe Radiante</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <meta name="facebook-domain-verification" content="lugupjkdi297w32zr8z18fbydhzxl6" />                
                </Head>
                <Script
                  id="fb-pixel"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '722506406412193');
                    fbq('track', 'PageView');                    
                    `,
                  }}
                />
                <LanguageContext.Provider value={{updateContext: updateSelectedLanguage, contextValue: defaultBrowserLanguage}}>
                    <div className='App--content'>
                        <Component {...pageProps} />
                    </div>
                </LanguageContext.Provider>
            </div>
)}
