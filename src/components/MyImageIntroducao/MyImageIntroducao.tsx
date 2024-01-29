import Image from 'next/image'

import teste from '../../assets/img/introducao/teste.svg'

import atencaoGravidezRadiantePT from '../../assets/img/introducao/atencao-gravidez-radiante-pt-1.svg'
import atencaoGravidezRadianteMobilePT from '../../assets/img/introducao/atencao-gravidez-radiante-pt-mobile-1.svg'

import paraQuem1GravidezRadiantePT from '../../assets/img/introducao/para-quem-2-gravidez-radiante-PT.svg'
import paraQuem1GravidezRadiantePTMobile from '../../assets/img/introducao/para-quem-2-gravidez-radiante-PT-mobile.svg'

export function getImageByName(name: string) {
  if ('/introducao-gravidez-radiante-pt'.includes(name)) {
    return  teste
  } else if ('introducao/atencao-gravidez-radiante-pt'.includes(name)) {
    return atencaoGravidezRadiantePT
  } else if ('/introducao/para-quem-2-gravidez-radiante-PT'.includes(name)) {
    return paraQuem1GravidezRadiantePT
  } else if ('/introducao/para-quem-2-gravidez-radiante-PT-mobile'.includes(name)) {
    return paraQuem1GravidezRadiantePTMobile
  } else {
    return atencaoGravidezRadianteMobilePT
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