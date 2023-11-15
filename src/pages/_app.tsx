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
                    <meta name="facebook-domain-verification" content="r7v3nethi08xl2x6uqps82ilyj0bkz" />
                </Head>
                <LanguageContext.Provider value={{updateContext: updateSelectedLanguage, contextValue: defaultBrowserLanguage}}>
                    <div className='App--content'>
                        <Component {...pageProps} />
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
                          fbq('init', '1277739633622360');
                          fbq('track', 'PageView');                    
                          `,
                          }}
                        />
                        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EVY1Q6GR61" />
                        <Script
                          id='google-analytics'
                          dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-EVY1Q6GR61'); `,
                          }}
                        />
                    </div>
                </LanguageContext.Provider>
            </div>
)}
