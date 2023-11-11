export function getTitleByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    if (language === 'ES') {
      return 'Hmm... todavía no hemos encontrado resultados para su búsqueda.'
    } else if (language === 'PT') {
      return 'Hmmm... ainda não encontramos resultados para sua pesquisa.'
    } else {
      return "Hmm... we haven't found results for your search yet."
    }
}  
export function getMessageByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    if (language === 'ES') {
      return '¿Prefieres echar un vistazo a nuestra página de productos o ponerte en contacto a través de WhatsApp?'
    } else if (language === 'PT') {
      return 'Você prefere dar uma olhada na nossa página de produtos ou entrar em contato via whatsapp?'
    } else {
      return "Do you prefer to take a look at our product page or get in touch via WhatsApp?"
    }
}
export function getLabelVerTodosByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    if (language === 'ES') {
      return 'Ver todos los productos'
    } else if (language === 'PT') {
      return 'Ver todos os produtos'
    } else {
      return "View all products"
    }
}
export function getLabelContatoByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    if (language === 'ES') {
      return 'Conversar con alguien'
    } else if (language === 'PT') {
      return 'Conversar com alguém'
    } else {
      return "Chat with someone"
    }
}
