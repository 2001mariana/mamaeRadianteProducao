import MyImagePrecificacao from "../MyImagePrecificacao";


interface PrecificacaoProps {
    nameImage: string
}

function Precificacao({ nameImage }: PrecificacaoProps) {   
 
  return (
    <div className="Garantia">       
        <div className="Garantia__image desktop">
          <MyImagePrecificacao nameImage={nameImage} />
        </div>

        <div className="Garantia__image mobile">
          <MyImagePrecificacao nameImage={`${nameImage}-mobile`} />
        </div>
    </div>
  );
}

export default Precificacao;
