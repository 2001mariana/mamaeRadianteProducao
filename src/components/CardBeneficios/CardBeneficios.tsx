import { BeneficionsHeadlineFinal } from "@/interfaces/Ebook";
import { getTittleByLanguage } from "../HeadlineBonus/HeadlineBonusUtils";
import MyImageIcons from "../MyImageHeadlineBonus";

interface CardBeneficios {
    language: "PT" | "ES" | "ENG"
    titleHeadlineEbookBonus?: string[]
    itensHeadlineFinal: BeneficionsHeadlineFinal[]
}

const CardBeneficios = ({ language, titleHeadlineEbookBonus, itensHeadlineFinal }: CardBeneficios) => {
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
            <div className={`CardNeon--White ${item.icon}`} key={item.item}>
              <div><MyImageIcons nameImage={item.icon} /></div>
              {item.item}
            </div>
          )}
        </div>
        </>
    )
}

export default CardBeneficios