export default interface Ebook {
    uuid: string
    uuidVideo: string
    headlineVideo?: string
    urlVideoYoutube?: string
    isFunil: boolean
    idStyledByProduct: string
    nome: string
    nomeEbook: string
    precoMaior: string
    precoMenor: string
    descricao: string[]
    tituloBeneficios: string[]
    tituloDepoimentos: string
    tituloBonus: string
    tituloHeadlineFinal: string[]
    subtituloHeadlineFinal?: string
    textoOpcao1HeadlineFinal?: string
    textoOpcao2HeadlineFinal?: string
    linguagem: 'ES' | 'ENG' | 'PT'
    moeda: '€' | 'R$' | '$'
    capitulos: string[]
    tag: string
    textButtonToBuy: string
    textButtonToBuyPackBonus?: string
    textButtonToDepoimentos: string
    itensHeadlineFinal: BeneficionsHeadlineFinal[]
    aprendizados: string[]
    avisoEmbaixoDoPreco: string
    urlComprarProduto: string
    urlComprarProdutoTelaBonus?: string
    urlComprarPackBonus?: string
    colorNeonGarantia: 'Green' | 'Purple' | 'Orange' | 'Blue'
    urlImagesPrevia: string[]
    urlImagesDepoimentos: string[]
    urlImageIntroducao?: string;
    urlImageCapa: string
    urlImageCapaSecudaria: string
    urlImageCapaBonus: string 
    urlImageCapaBonusSecudaria: string
    urlCardAposBeneficios: string
    urlCardAposBeneficiosBonus: string
    urlLinkWhatsapp: string
    existeTerceiroBonus: boolean
    existeIntroducao?: boolean
    bonus: {
        precoMaior: string
        precoMenor: string
        precoMaiorAdquirindoTodos?: string
        precoMenorAdquirindoTodos?: string
        titleHeadlineParabens?: string
        subtitleHeadlineParabens?: string
        titleBeneficiosBonus?: string
        exibirPrecoBonus: boolean
        exibirPrecoAposBeneficios?: boolean
        titleHeadlineEbookBonus: string[]
        textoBonusEbookPrincipal: string[]
        fraseEmbaixoDoPreco?: string
        exibirFraseEmbaixoDoPrecoIsolada?: boolean
        beneficiosBonus: string[]
    }
}

export interface BeneficionsHeadlineFinal {
    item: string
    icon: string
}