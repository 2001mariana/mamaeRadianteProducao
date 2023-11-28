import Image from 'next/image'

import introducaoGravidezRadiantePT from '../../assets/img/introducao/introducao-gravidez-radiante-pt.svg'
import introducaoGravidezRadianteMobilePT from '../../assets/img/introducao/introducao-gravidez-radiante-pt-mobile.svg'

export function getImageByName(name: string) {
  if ('/introducao-gravidez-radiante-pt'.includes(name)) {
    return  introducaoGravidezRadiantePT
  } else {
    return introducaoGravidezRadianteMobilePT
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