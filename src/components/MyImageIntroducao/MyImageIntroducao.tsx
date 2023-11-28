import Image from 'next/image'

import introducaoGravidezRadiantePT from '../../assets/img/introducao/introducao-gravidez-radiante-pt.svg'
import introducaoGravidezRadianteMobilePT from '../../assets/img/introducao/introducao-gravidez-radiante-pt-mobile.svg'

import atencaoGravidezRadiantePT from '../../assets/img/introducao/atencao-gravidez-radiante-pt.svg'
import atencaoGravidezRadianteMobilePT from '../../assets/img/introducao/atencao-gravidez-radiante-pt-mobile.svg'

export function getImageByName(name: string) {
  if ('/introducao-gravidez-radiante-pt'.includes(name)) {
    return  introducaoGravidezRadiantePT
  } else if ('/introducao-gravidez-radiante-pt-mobile'.includes(name)) {
    return introducaoGravidezRadianteMobilePT
  } else if ('introducao/atencao-gravidez-radiante-pt'.includes(name)) {
    return atencaoGravidezRadiantePT
  } {
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