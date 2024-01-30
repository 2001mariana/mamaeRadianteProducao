import { controlBrowserLanguage } from '@/components/LanguageControl/LanguageControlUtils';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react';
import Script from 'next/script';

export const LanguageContext = createContext<{updateContext: (formatedBrowserLanguage: "ES" | "ENG" | "PT") => void, contextValue: 'PT' | 'ES' | 'ENG' | ''}>({updateContext: () => {}, contextValue: ''});

export default function App({ Component, pageProps }: AppProps) {
    const [defaultBrowserLanguage, setDefaultBrowserLanguage] = useState<'PT' | 'ES' | 'ENG' | ''>('')

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
                        <Script src="https://www.youtube.com/iframe_api" />
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
