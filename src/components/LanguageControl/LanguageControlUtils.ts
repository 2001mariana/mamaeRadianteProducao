export function controlBrowserLanguage(browserLanguage: string) {
    if (browserLanguage.includes('pt')) {
       return 'PT'
    } else if (browserLanguage.includes('es')) {
        return 'ES'
    } else {
        return 'ENG'
    }
}
