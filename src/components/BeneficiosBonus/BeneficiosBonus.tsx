import { getBeneficiosBonusTittleByLanguage } from "@/data/Utils/GetAprendizadoByLanguage";
import { FaStar } from "react-icons/fa";
import MyImage from '../MyImageCardCuidado'

interface BeneficiosBonusProps {
    language: 'PT' | 'ES' | 'ENG' | ''
    beneficios: string[]    
    urlCardAposBeneficios: string
    titleBeneficiosBonus?: string
}

function BeneficiosBonus({ language, titleBeneficiosBonus, beneficios, urlCardAposBeneficios }: BeneficiosBonusProps) {
 const urlCardAposBeneficiosMobile = `${urlCardAposBeneficios}-mobile`

  return (
    <div className='Beneficios__bonus'>
          <span className='ProdutoEspecifico__tittle'>
            {titleBeneficiosBonus ? titleBeneficiosBonus : getBeneficiosBonusTittleByLanguage(language)}
          </span>

          <div className='Aprendizados__items'>
            {beneficios.map((beneficio) => 
              <div className='Aprendizados__item' key={beneficio}>
                <div className='Aprendizados__item--icone'>
                  <FaStar size={14} />
                </div> 
                {beneficio} 
              </div>
            )}
          </div>

          <div className="MyImageCardCuidado desktop">
            <MyImage nameImage={urlCardAposBeneficios} />
          </div>

          <div className="MyImageCardCuidado mobile">
            <MyImage nameImage={urlCardAposBeneficiosMobile} />
          </div>
      </div>
  );
}

export default BeneficiosBonus;
