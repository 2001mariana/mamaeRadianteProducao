import { ProdutosDisponiveis } from "../Produtos/ProdutosDisponiveis"

export const getProductByUuid = (uuid: string) => {
    const produto = ProdutosDisponiveis.filter((ebook) => ebook.uuid === uuid)

    if (produto.length === 0) {
        return undefined
    }
    return produto[0]
}

export const getProductByNome = (nome: string) => {
    const produto = ProdutosDisponiveis.filter((ebook) => ebook.nome === nome)

    if (produto.length === 0) {
        return undefined
    }
    return produto[0]
}