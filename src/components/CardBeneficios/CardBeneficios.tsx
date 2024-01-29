import { BeneficionsHeadlineFinal } from "@/interfaces/Ebook";
import { getTittleByLanguage } from "../HeadlineBonus/HeadlineBonusUtils";
import MyImageIcons from "../MyImageHeadlineBonus";
import Link from "next/link";
import Button from "../Button";

interface CardBeneficios {
    language: "PT" | "ES" | "ENG"
    titleHeadlineEbookBonus?: string[]
    itensHeadlineFinal: BeneficionsHeadlineFinal[]
    exibirBotaoCTA: boolean
    urlComprarProduto: string
    textButtonToBuy: string
}

const CardBeneficios = ({ 
    language, 
    titleHeadlineEbookBonus, 
    itensHeadlineFinal, 
    exibirBotaoCTA, 
    urlComprarProduto,
    textButtonToBuy 
}: CardBeneficios) => {
    return (

        <>
         <div className='ProdutoEspecifico__tittle'>
          { 
            titleHeadlineEbookBonus ? titleHeadlineEbookBonus.map((title: string) => 
                <div key={title}>{title}</div>)
              : getTittleByLanguage(language) 
          }
        </div>
        <div className='ProdutoEspecifico__headline--itens'>
          {itensHeadlineFinal.map((item) => 
            <div className={`CardNeon--Purple ${item.icon}`} key={item.item}>
              <div><MyImageIcons nameImage={item.icon} /></div>
              {item.item}
            </div>
          )}
        </div>
        { exibirBotaoCTA ? 
            <div className="CardBeneficios__button mobile">
              <Link className='ProdutoEspecifico__headline--button-buy' href={urlComprarProduto}>
                <Button 
                    className='animation-pulse' 
                    variant='neon' 
                    color='Green' 
                    size='Large' 
                    text={textButtonToBuy} 
                />
              </Link>
            </div>
            : null
        }
        </>
    )
}

export default CardBeneficios