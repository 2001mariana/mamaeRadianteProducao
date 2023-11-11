import classNames from "classnames";
import MyImageGarantia from "../MyImageGarantia";

interface GarantiaProps {
    color: 'Green' | 'Purple' | 'Orange' | 'Blue'
    language: 'PT' | 'ES' | 'ENG'
}

function Garantia({ color, language }: GarantiaProps) {    
    const GarantiaTittleClasses = classNames(
      `Garantia__tittle`,
      `Garantia--${color}`
    )
    function getTittleByLanguage(language: 'PT' | 'ES' | 'ENG' ): string {
        if (language === 'ES') {
            return ' DÍAS DE GARANTÍA'
        } else if (language === 'PT') {
            return ' DIAS DE GARANTIA'
        } else {
            return ' DAYS WARRANTY'
        }
    }
    function getDaysByLanguage(language: 'PT' | 'ES' | 'ENG' ): string {
        if (language === 'ES') {
            return '14'
        } else if (language === 'PT') {
            return '7'
        } else {
            return '7'
        }
    }
    function getTextByLanguage(language: 'PT' | 'ES' | 'ENG' ): string {
        if (language === 'ES') {
            return '¡Aquí su satisfacción está garantizada!'
        } else if (language === 'PT') {
            return 'Aqui sua satisfação é garantida!'
        } else {
            return 'Here your satisfaction is guaranteed!'
        }
    }
  return (
    <div className="Garantia"> 
      <div className="Garantia__image">
        <MyImageGarantia nameImage={language} />
      </div>
      <span className={GarantiaTittleClasses}>
        <span className='Garantia__days'>
            {getDaysByLanguage(language)}
        </span> 
        {getTittleByLanguage(language)}
      </span> 
      <span className='Garantia__text'>{getTextByLanguage(language)}</span>      
    </div>
  );
}

export default Garantia;
