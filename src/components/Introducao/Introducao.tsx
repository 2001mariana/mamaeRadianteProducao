import MyImageIntroducao from "../MyImageIntroducao";

interface IntroducaoProps {
    urlImageIntroducao?: string
    urlImageAtencao?: string
    urlImageParaQuem?: string
}

const Introducao = ({ urlImageIntroducao, urlImageAtencao, urlImageParaQuem }: IntroducaoProps) => {
  const imageAtencaoMobile = `${urlImageAtencao}-mobile`;
  const imageParaQuemMobile = `${urlImageParaQuem}-mobile`;

    return (
      <div className="Introducao">
        
        { urlImageIntroducao ? <MyImageIntroducao nameImage={urlImageIntroducao} /> : null }

        {
          urlImageAtencao ? 
            <>
              <div className="desktop">
                <MyImageIntroducao nameImage={urlImageAtencao} />
              </div>
    
              <div className="mobile">
                <MyImageIntroducao nameImage={imageAtencaoMobile} />
              </div>
            </>
          : null
        }

        {
          urlImageParaQuem ? 
            <>
              <div className="desktop">
                <MyImageIntroducao nameImage={urlImageParaQuem} />
              </div>
    
              <div className="mobile">
                <MyImageIntroducao nameImage={imageParaQuemMobile} />
              </div>
            </>
          : null
        }
        
      </div>
    )
}

export default Introducao