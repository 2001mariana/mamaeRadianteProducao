import Link from "next/link"
import Button from "../Button"
import Lottie from "lottie-react"
import PrecoRiscando from '../../assets/animacoes/x-em-risco.json'
import { getDeByLanguage, getPorApenasByLanguage } from "../HeadlineBonus/HeadlineBonusUtils"

interface PrecoProps {
    moeda: '€' | 'R$' | '$'
    language: 'PT' | 'ES' | 'ENG'
    precoMaior: string
    precoMenor: string
    textButtonToBuy: string
    urlComprarProduto: string
    shouldShowButtonBuy: boolean
    avisoEmbaixoDoPreco: string
    fraseEmbaixoDoPreco?: string
}

const Preco = ({ 
    moeda, 
    precoMaior, 
    precoMenor, 
    urlComprarProduto, 
    textButtonToBuy, 
    language, 
    shouldShowButtonBuy,
    avisoEmbaixoDoPreco,
    fraseEmbaixoDoPreco 
}: PrecoProps) => {
    const dynamicClassnamePrecoMenor = `${shouldShowButtonBuy ? 'preco-novo' : 'preco-novo animation-pulse'}`

    return (
        <div className='ProdutoEspecifico__preco-antigo'>
            { getDeByLanguage(language) } 
            <span className='preco-antigo'>
                <Lottie animationData={PrecoRiscando} loop={true} />
                {moeda} {precoMaior}
            </span>
            <span className='ProdutoEspecifico__por-apenas'>
              { getPorApenasByLanguage(language) }
            </span>
            <span className={dynamicClassnamePrecoMenor}>
                {moeda} {precoMenor}
            </span>
            
            <span className='ProdutoEspecifico__preco-aviso'>
              *{ avisoEmbaixoDoPreco }
            </span>  

            { shouldShowButtonBuy && (
                <Link className='ProdutoEspecifico__headline--button-buy' href={urlComprarProduto}>
                    <Button 
                        className='animation-pulse' 
                        variant='neon' 
                        color='Green' 
                        size='Large' 
                        text={textButtonToBuy} 
                    />
                </Link>
            )}   
            { fraseEmbaixoDoPreco && 
              <span className='ProdutoEspecifico__por-apenas Garantia__text'>
                { fraseEmbaixoDoPreco }
              </span>      
            }      
        </div>
    )
}

export default Preco