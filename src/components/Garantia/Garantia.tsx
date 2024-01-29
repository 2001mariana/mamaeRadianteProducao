import MyImageGarantia from "../MyImageGarantia";

interface GarantiaProps {
    language: 'PT' | 'ES' | 'ENG'
}

function Garantia({ language }: GarantiaProps) {   
 
  return (
    <div className="Garantia">       
        <div className="Garantia__image desktop">
          <MyImageGarantia nameImage={`garantia-${language}`} />
        </div>

        <div className="Garantia__image mobile">
          <MyImageGarantia nameImage={`garantia-${language}-mobile`} />
        </div>
    </div>
  );
}

export default Garantia;
