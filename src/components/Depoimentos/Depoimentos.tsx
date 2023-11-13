import { getTittleByLanguage } from "./DepoimentosUtils"
import MyImage from "../MyImageDepoimentos";
import Carousel from "nuka-carousel"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useEffect, useState } from "react"
import Button from "../Button"
import Link from "next/link";

interface DepoimentosProps {
    language: 'PT' | 'ES' | 'ENG'
    urlImagesDepoimentos: string[]
    textButtonToBuy: string
    nameEbookButton: string
    urlComprarProduto: string
    tituloDepoimentos?: string
}

const Depoimentos = ({ language, urlImagesDepoimentos, textButtonToBuy, nameEbookButton, tituloDepoimentos, urlComprarProduto }: DepoimentosProps) => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function shouldReturnNumberSlidesToShow(widthSize: number) {
    if (widthSize < 660 ) {
      return 1
    } else if (widthSize < 1000) {
      return 2
    }  else if (widthSize < 1200) {
      return 3
    } else {
      return 4
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    shouldReturnNumberSlidesToShow(windowSize)
  }, [windowSize])

  return (
    <div className='Depoimentos'>
      <span className='ProdutoEspecifico__tittle'>
        { tituloDepoimentos ? tituloDepoimentos : getTittleByLanguage(language) }
      </span>
      <div className='Depoimentos--carrosel'>
        <Carousel 
          slidesToShow={shouldReturnNumberSlidesToShow(windowSize)}
          wrapAround={true} 
          renderCenterLeftControls={({ previousSlide }) => (
            <AiOutlineLeft className='Depoimentos__carrossel--seta' onClick={previousSlide} size={40} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <AiOutlineRight className='Depoimentos__carrossel--seta' onClick={nextSlide} size={40} />
          )}
        >
          {urlImagesDepoimentos.map((image) => 
            <div key={image} className='Depoimento'>
              <MyImage nameImage={image} />
            </div>
        )}
        </Carousel>
      </div>
      
      <div className="Depoimentos__Button">
        <Link href={urlComprarProduto}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            id={`${nameEbookButton}-3`}
            text={textButtonToBuy} 
          />
        </Link>
      </div>
    </div>
)}

export default Depoimentos