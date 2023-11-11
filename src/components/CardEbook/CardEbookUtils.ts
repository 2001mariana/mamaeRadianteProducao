export function getVerDetalhesByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    if (language === 'ES') {
      return 'Ver detalles'
    } else if (language === 'PT') {
      return 'Ver detalhes'
    } else {
      return "View details"
    }
}