import Image from 'next/image'

import PrecoGravidezRadiantePT from '../../assets/img/preco/preco-gravidez-radiante-PT.svg'
import PrecoGravidezRadiantePTMobile from '../../assets/img/preco/preco-gravidez-radiante-PT-mobile.svg'

export function getImageByName(name: string) {
  if ('/preco/preco-gravidez-radiante-PT'.includes(name)) {
    return PrecoGravidezRadiantePT
  } else {
    return PrecoGravidezRadiantePTMobile
  }
}
interface MyImageProps {
    nameImage: string
    priority?: boolean
}

const MyImage = ({ nameImage, priority = true }: MyImageProps) => {
  return (
    <Image width={230} height={415} priority={priority} src={getImageByName(nameImage)} alt='100%' />
)}

export default MyImage