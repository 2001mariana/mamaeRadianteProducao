import { getCapituloTittleByLanguage } from "@/data/Utils/GetAprendizadoByLanguage"
import Capitulo from "../Capitulo/Capitulo"

interface CapitulosProps {
    capitulos: string[]
    language: 'PT' | 'ES' | 'ENG'
}

const Capitulos = ({ capitulos, language }: CapitulosProps) => {
    return (
        <div className='Capitulos'>
          <span className='ProdutoEspecifico__tittle'>
            {getCapituloTittleByLanguage(language)}
          </span>
          <ol className='lista-capitulos'>
            {
              capitulos.map((capitulo, index) => 
                <Capitulo index={index + 1} text={capitulo} key={capitulo} />
              )
            }
          </ol>
        </div>
    )
}

export default Capitulos