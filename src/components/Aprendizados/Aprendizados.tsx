import { getAprendizadoTittleByLanguage } from "@/data/Utils/GetAprendizadoByLanguage"
import Link from "next/link"
import { FaStar } from "react-icons/fa"
import Button from "../Button"
import MyImage from '../MyImageCardCuidado'

interface AprendizadosProps {
    language: 'PT' | 'ES' | 'ENG' | ''
    aprendizados: string[]
    nameEbookButton: string
    textButtonToBuy: string
    urlComprarProduto: string
    urlCardAposBeneficios: string
    tituloBeneficios?: string[]
    isVisibleButton: boolean
}

const Aprendizados = ({ 
    language, 
    aprendizados, 
    nameEbookButton, 
    urlComprarProduto, 
    textButtonToBuy, 
    tituloBeneficios, 
    urlCardAposBeneficios,
    isVisibleButton
  }: AprendizadosProps) => {
  const urlCardAposBeneficiosMobile = `${urlCardAposBeneficios}-mobile`

  return (
        <div className='Aprendizados'>
        <span className='ProdutoEspecifico__tittle'>
          {tituloBeneficios ? tituloBeneficios.map((titulo) => <span className="teste__tittle" key={titulo}>{titulo}</span>) : getAprendizadoTittleByLanguage(language)}
        </span>
        <div className='Aprendizados__items'>
          {aprendizados.map((aprendizado) => 
            <div className='Aprendizados__item' key={aprendizado}>
              <div className='Aprendizados__item--icone'>
                <FaStar size={14} />
              </div> 
              {aprendizado} 
            </div>
          )}
        </div>

        <div className="MyImageCardCuidado desktop">
          <MyImage nameImage={urlCardAposBeneficios} />
        </div>

        
        <div className="MyImageCardCuidado mobile">
          <MyImage nameImage={urlCardAposBeneficiosMobile} />
        </div>
        
        {
          isVisibleButton ? 
            <div className='ProdutoEspecifico__content--buy'>
              <Link href={urlComprarProduto}>
                <Button 
                  className='animation-pulse' 
                  variant='neon' 
                  color='Green' 
                  size='Large' 
                  id={`${nameEbookButton}-2`}
                  text={textButtonToBuy} 
                />
              </Link>
            </div>
          : null
        }
        
      </div>
    )
}

export default Aprendizados