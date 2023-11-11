export function getTittleByLanguage(language: 'PT' | 'ES' | 'ENG' ): string {
    if (language === 'ES') {
        return '¡Aprovecha y recibe todos estos bonos especialmente pensados para ti!'
    } else if (language === 'PT') {
        return 'Aproveite e receba todos esses bônus especialmente pensado para você!'
    } else {
        return 'Take advantage and receive all these bonuses specially designed for you!'
    }
}

export function getDeByLanguage(language: 'PT' | 'ES' | 'ENG' ): string {
    if (language === 'PT' || language === 'ES') {
        return 'De:'
    } else {
        return 'From:'
    }
}

export function getPorApenasByLanguage(language: 'PT' | 'ES' | 'ENG' ): string {
    if (language === 'ES') {
        return 'Por solo:'
    } else if (language === 'PT') {
        return 'Por apenas:'
    } else {
        return 'Only:'
    }
}