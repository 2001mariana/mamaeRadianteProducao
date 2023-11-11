import { getTittleByLanguage } from "./HeadlineBonusUtils";
import { BeneficionsHeadlineFinal } from "@/interfaces/Ebook";
import Preco from "../Preco";
import MyImage from "../MyImageLazy";
import MyImageIcons from "../MyImageHeadlineBonus";
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
  exibirPrecoBonus
}: HeadlineBonusProps) => {

  const deveExibirPreco = (!exibirPrecoAposBeneficios && exibirPrecoBonus);

  return (
      <div className='HeadlineBonus'>
        <div className='ProdutoEspecifico__tittle'>
          { 
            titleHeadlineEbookBonus ? titleHeadlineEbookBonus.map((title) => 
                <div key={title}>{title}</div>)
              : getTittleByLanguage(language) 
          }
        </div>
        <div className='ProdutoEspecifico__headline--itens'>
          {itensHeadlineFinal.map((item) => 
            <div className={`CardNeon--White ${item.icon}`} key={item.item}>
              <div><MyImageIcons nameImage={item.icon} /></div>
              {item.item}
            </div>
          )}
        </div>
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