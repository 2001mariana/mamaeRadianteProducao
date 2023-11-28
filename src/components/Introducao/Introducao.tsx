import { useEffect, useState } from "react";
import MyImageIntroducao from "../MyImageIntroducao";

interface IntroducaoProps {
    urlImageIntroducao: string
    urlImageAtencao: string
}

const Introducao = ({ urlImageIntroducao, urlImageAtencao }: IntroducaoProps) => {
    
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [nameImage, setNameImage] = useState(urlImageIntroducao);
  const [nameImageAtencao, setNameImageAtencao] = useState(urlImageAtencao);

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
    const updateNameForMobile = () => {
      setNameImage(`${urlImageIntroducao}-mobile`)
      setNameImageAtencao(`${urlImageAtencao}-mobile`)
    }
    
    const updateImageForOriginalSize = () => {
      setNameImage(urlImageIntroducao)
      setNameImageAtencao(urlImageAtencao)
    }
  
    function shouldReturnNameImage(widthSize: number) {
         if (widthSize < 600 ) {
          return updateNameForMobile()
        } else
        {
          return updateImageForOriginalSize()
        }
    }

      shouldReturnNameImage(windowSize)
  }, [urlImageAtencao, urlImageIntroducao, windowSize])

    return (
      <div className="Introducao">
        <MyImageIntroducao nameImage={nameImage} />
        <MyImageIntroducao nameImage={nameImageAtencao} />
      </div>
    )
}

export default Introducao