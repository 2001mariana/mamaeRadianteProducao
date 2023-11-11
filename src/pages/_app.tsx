import { controlBrowserLanguage } from '@/components/LanguageControl/LanguageControlUtils';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react';

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
                </Head>
                <LanguageContext.Provider value={{updateContext: updateSelectedLanguage, contextValue: defaultBrowserLanguage}}>
                    <div className='App--content'>
                        <Component {...pageProps} />
                    </div>
                </LanguageContext.Provider>
            </div>
)}
