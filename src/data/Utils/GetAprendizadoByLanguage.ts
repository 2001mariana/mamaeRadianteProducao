export function getAprendizadoTittleByLanguage(language: 'PT' | 'ES' | 'ENG' | '' ): string {
    if (language === 'ES') {
        return 'Beneficios'
    } else if (language === 'PT') {
        return 'Benefícios'
    } else {
        return 'Benefits'
    }
}

export function getCapituloTittleByLanguage(language: 'PT' | 'ES' | 'ENG' | '' ): string {
    if (language === 'ES' || language === 'PT') {
        return 'Capítulos'
    } else {
        return 'Chapters'
    }
}

export function getPreviaTittleByLanguage(language: 'PT' | 'ES' | 'ENG' | '' ): string {
    if (language === 'ES') {
        return 'Vista previa'
    } else if (language === 'PT') {
        return 'Prévia'
    } else {
        return 'Preview'
    }
}

export function getBeneficiosBonusTittleByLanguage(language: 'PT' | 'ES' | 'ENG' | '' ): string {
    if (language === 'ES') {
        return 'Y obtendrás todos estos beneficios'
    } else if (language === 'PT') {
        return 'E ganhará todos estes benefícios'
    } else {
        return 'And you will gain all these benefits'
    }
}

export function getTittleSuporteByLanguage(language: 'PT' | 'ES' | 'ENG' | '' ): string {
    if (language === 'ES') {
        return '¿Quieres ser parte de todo esto pero aún tienes una pregunta?'
    } else if (language === 'PT') {
        return 'Quer fazer parte de tudo isso mas ainda está com dúvida?'
    } else {
        return 'Want to be a part of all this but still have a question?'
    }
}

export function getLabelSuporteByLanguage(language: 'PT' | 'ES' | 'ENG' | '' ): string {
    if (language === 'ES') {
        return 'Tengo una pregunta'
    } else if (language === 'PT') {
        return 'Estou com dúvida'
    } else {
        return 'I have a question'
    }
}
