import { getLabelSuporteByLanguage, getTittleSuporteByLanguage } from "@/data/Utils/GetAprendizadoByLanguage"
import Link from "next/link"
import Button from "../Button"
import { BsWhatsapp } from "react-icons/bs"

 interface SuporteWhatsappProps {
    language: 'PT' | 'ES' | 'ENG'
    urlLinkWhatsapp: string
 }
 
 function SuporteWhatsapp({ language, urlLinkWhatsapp }: SuporteWhatsappProps) {

    if (language === 'PT') {
      return (<>
      <span className='ProdutoEspecifico__tittle'>
        {getTittleSuporteByLanguage(language)}
      </span>

      <div className='ProdutoEspecifico__content--buy'>
        <Link href={urlLinkWhatsapp}>
          <Button 
            variant='neon' 
            color='Green' 
            size='Large' 
            text={getLabelSuporteByLanguage(language)} 
          >
            <BsWhatsapp size={30}  />
          </Button>
        </Link>
      </div>
    </>)
    } 
    
    return null
  }
  
  export default SuporteWhatsapp