export function getTittleByLanguage(language: 'PT' | 'ES' | 'ENG' ): string {
    if (language === 'ES') {
        return 'Mira lo que están diciendo sobre nuestra guía completa.'
    } else if (language === 'PT') {
        return 'Veja o que estão dizendo sobre nosso guia completo'
    } else {
        return "See what they're saying about our comprehensive guide."
    }
}