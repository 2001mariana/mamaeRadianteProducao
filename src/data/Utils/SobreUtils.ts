export function getTitleMissaoByLanguage(language: 'PT' | 'ES' | 'ENG') {
    if (language === 'ES') {
      return 'Misión'
    } else if (language === 'PT') {
      return 'Missão'
    } else {
      return "Mission"
    }
}
export function getTextMissaoByLanguage(language: 'PT' | 'ES' | 'ENG') {
    if (language === 'ES') {
      return 'Nuestra misión es llevar el conocimiento a nuevas fronteras y transformar vidas a través de la tecnología. Creemos en la confianza, en la búsqueda de la excelencia, en la libertad de elección que solo el conocimiento puede proporcionar y en el crecimiento continuo como los pilares que nos impulsan a ser la mejor empresa para trabajar en el mundo.'
    } else if (language === 'PT') {
      return 'Nossa missão é levar o conhecimento adiante e transformar vidas através da tecnologia. Acreditamos na confiança, na busca pela excelência, na liberdade de escolha que só o conhecimento é capaz de nos dar e no crescimento contínuo como os pilares que nos impulsionam a ser a melhor empresa para se trabalhar no mundo.'
    } else {
      return "Our mission is to take knowledge to new frontiers and transform lives through technology. We believe in trust, the pursuit of excellence, the freedom of choice that only knowledge can provide, and continuous growth as the pillars that drive us to be the best company to work for in the world."
    }
}
export function getTitleVisaoByLanguage(language: 'PT' | 'ES' | 'ENG') {
    if (language === 'ES') {
      return 'Visión'
    } else if (language === 'PT') {
      return 'Visão'
    } else {
      return "Vision"
    }
}
export function getTextVisaoByLanguage(language: 'PT' | 'ES' | 'ENG') {
    if (language === 'ES') {
      return 'Tener la mejor empresa del mundo para trabajar, donde la pasión por el aprendizaje se entrelaza con la flexibilidad, creando un entorno de trabajo divertido e inspirador. Creemos en la libertad de nuestros colaboradores para realizar sus actividades laborales desde donde deseen, ya sea en la playa en un día soleado, en casa en un día frío, en un resort o en cualquier lugar que elijan. Esta confianza mutua es la base de nuestra cultura y éxito.'
    } else if (language === 'PT') {
      return 'Tornar-se a melhor empresa do mundo para se trabalhar, onde a paixão pelo aprendizado se entrelaça com a flexibilidade, criando um ambiente de trabalho divertido e inspirador. Acreditamos na liberdade de nossos colaboradores para realizar suas atividades de trabalho de onde desejarem, seja na praia em um dia ensolarado, em casa em um dia frio, em um resort ou em qualquer lugar que escolham. Essa confiança mútua é a base de nossa cultura e sucesso.'
    } else {
      return "Becoming the best company in the world to work for, where the passion for learning intertwines with flexibility, creating a fun and inspiring work environment. We believe in the freedom of our employees to perform their work activities from wherever they wish, whether it's at the beach on a sunny day, at home on a cold day, at a resort, or wherever they choose. This mutual trust is the foundation of our culture and success."
    }
}
export function getTitleValoresByLanguage(language: 'PT' | 'ES' | 'ENG') {
    if (language === 'ES' || language === 'PT') {
      return 'Valores'
    } else {
      return "Values"
    }
}
export function getValoresByLanguage(language: 'PT' | 'ES' | 'ENG') {
    if (language === 'ES') {
      return ['Confianza', 'Excelencia', 'Evolución continua', 'Flexibilidad', 'Sentido de propietario']
    } else if (language === 'PT') {
      return ['Confiança', 'Excelência', 'Evolução contínua', 'Flexibilidade', 'Senso de dono']
    } else {
      return ['Trust', 'Excellence', 'Continuous evolution', 'Flexibility', 'Ownership mindset']
    }
}