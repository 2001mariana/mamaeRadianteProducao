import { BeneficionsHeadlineFinal } from "@/interfaces/Ebook";
import Preco from "../Preco";
import MyImage from "../MyImageLazy";
import CardBeneficios from "../CardBeneficios/CardBeneficios";
interface HeadlineBonusProps {
    moeda: '€' | 'R$' | '$'
    language: 'PT' | 'ES' | 'ENG'
    urlCapaEbook: string
    precoMaior: string
    precoMenor: string
    itensHeadlineFinal: BeneficionsHeadlineFinal[]
    avisoEmbaixoDoPreco: string
    tituloBonus?: string
    exibirPrecoAposBeneficios?: boolean
    textoBonusEbookPrincipal?: string[]
    titleHeadlineEbookBonus?: string[]
    fraseEmbaixoDoPreco?: string
    exibirPrecoBonus: boolean    
    existeVideo: boolean
    urlComprarProduto: string
    textButtonToBuy: string
}

const HeadlineBonus = ({ 
  moeda, 
  precoMaior, 
  precoMenor, 
  itensHeadlineFinal, 
  tituloBonus,
  language, 
  urlCapaEbook, 
  avisoEmbaixoDoPreco,
  textoBonusEbookPrincipal,
  titleHeadlineEbookBonus,
  exibirPrecoAposBeneficios,
  fraseEmbaixoDoPreco,
  exibirPrecoBonus,
  existeVideo, 
  urlComprarProduto,
  textButtonToBuy
}: HeadlineBonusProps) => {

  const deveExibirPreco = (!exibirPrecoAposBeneficios && exibirPrecoBonus);

  return (
      <div className='HeadlineBonus'>
        {
          existeVideo ? null : 
            <CardBeneficios 
              itensHeadlineFinal={itensHeadlineFinal} 
              language={language} 
              titleHeadlineEbookBonus={titleHeadlineEbookBonus} 
              exibirBotaoCTA={existeVideo}
              textButtonToBuy={textButtonToBuy}
              urlComprarProduto={urlComprarProduto}
            />
        }

        {
          tituloBonus ? <div className='ProdutoEspecifico__tittle'>{tituloBonus}</div> : null
        }
        <div className="dynamic__image">
            <MyImage nameImage={urlCapaEbook} />
        </div>
        <div className='HeadlineBonus__content'>
          <div className='HeadlineBonus__content--image'>
            <MyImage nameImage={urlCapaEbook} />
          </div>
          <div className='HeadlineBonus__content--text'>

            { textoBonusEbookPrincipal ?
              <div className='ProdutoEspecifico__headline--subtittle column'>
                { textoBonusEbookPrincipal.map((texto) => <div className="Headline__paragrafo" key={texto}>{texto}</div>) }
              </div> : null 
            }
            
            {
              deveExibirPreco && 
              <div className="dynamic__visible--desktop">
                <Preco 
                  language={language}
                  moeda={moeda}
                  precoMaior={precoMaior}
                  precoMenor={precoMenor}
                  shouldShowButtonBuy={false}
                  nameEbookButton=""
                  textButtonToBuy=""
                  urlComprarProduto=""
                  fraseEmbaixoDoPreco={fraseEmbaixoDoPreco}
                  avisoEmbaixoDoPreco={avisoEmbaixoDoPreco}
                />
              </div>
            }
            
          </div>
        </div>
      </div>
    )}

export default HeadlineBonus