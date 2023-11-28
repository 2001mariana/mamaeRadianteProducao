import { useEffect, useState } from "react";
import MyImageIntroducao from "../MyImageIntroducao";

interface IntroducaoProps {
    urlImageIntroducao: string
}

const Introducao = ({ urlImageIntroducao }: IntroducaoProps) => {
    
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [nameImage, setNameImage] = useState(urlImageIntroducao)

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
    function shouldReturnNameImage(widthSize: number) {
         if (widthSize < 600 ) {
          return setNameImage(`${urlImageIntroducao}-mobile`)
        }{
          return setNameImage(urlImageIntroducao)
        }
      }

      shouldReturnNameImage(windowSize)
  }, [windowSize, nameImage, urlImageIntroducao])

    return <MyImageIntroducao nameImage={nameImage} />
}

export default Introducao