import Image from 'next/image'

import cuidadoGravidezRadianteES from '../../assets/img/banners-cuidado/cuidado-gravidez-radiante-ES.svg'
import cuidadoGravidezRadiantePT from '../../assets/img/banners-cuidado/cuidado-gravidez-radiante-PT.svg'
import importanteAmamentacaoES from '../../assets/img/banners-cuidado/importante-amamentacao-ES.svg'
import importanteAmamentacaoPT from '../../assets/img/banners-cuidado/importante-amamentacao-PT.svg'
import warningGuiaModasPT from '../../assets/img/banners-cuidado/warning-guia-de-modas-PT.svg'
import cuidadoGravidezRadianteESMobile from '../../assets/img/banners-cuidado/cuidado-gravidez-radiante-ES-mobile.svg'
import cuidadoGravidezRadiantePTMobile from '../../assets/img/banners-cuidado/cuidado-gravidez-radiante-PT-mobile.svg'
import importanteAmamentacaoESMobile from '../../assets/img/banners-cuidado/importante-amamentacao-ES-mobile.svg'
import importanteAmamentacaoPTMobile from '../../assets/img/banners-cuidado/importante-amamentacao-PT-mobile.svg'
import warningGuiaModasPTMobile from '../../assets/img/banners-cuidado/warning-guia-de-modas-PT-mobile.svg'

export function getImageByName(name: string) {
  if ('/cuidado-gravidez-radiante-ES'.includes(name)) {
    return cuidadoGravidezRadianteES
  } else if ('/cuidado-gravidez-radiante-PT'.includes(name)) {
    return cuidadoGravidezRadiantePT
  } else if ('/importante-amamentacao-ES'.includes(name)) {
    return importanteAmamentacaoES
  } else if ('/importante-amamentacao-PT'.includes(name)) {
    return importanteAmamentacaoPT
  } else if ('/cuidado-gravidez-radiante-ES-mobile'.includes(name)) {
    return cuidadoGravidezRadianteESMobile
  } else if ('/cuidado-gravidez-radiante-PT-mobile'.includes(name)) {
    return cuidadoGravidezRadiantePTMobile
  } else if ('/importante-amamentacao-ES-mobile'.includes(name)) {
    return importanteAmamentacaoESMobile
  } else if ('/importante-amamentacao-PT-mobile'.includes(name)) {
    return importanteAmamentacaoPTMobile
  } else if ('/warning-guia-de-modas-PT'.includes(name)) {
    return warningGuiaModasPT
  } else {
    return warningGuiaModasPTMobile
  }
}
interface MyImageProps {
    nameImage: string
    priority?: boolean
}

const MyImage = ({ nameImage, priority = true }: MyImageProps) => {
  return (
    <Image priority={priority} src={getImageByName(nameImage)} alt='100%' />
)}

export default MyImage