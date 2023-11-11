import Image from 'next/image'

import seloGarantiaEN from '../../assets/img/garantia/selo-garantia-EN.svg'
import seloGarantiaES from '../../assets/img/garantia/selo-garantia-ES.svg'
import seloGarantiaPT from '../../assets/img/garantia/selo-garantia-PT.svg'

export function getImageByName(name: string) {
  if ('img/garantia/selo-garantia-PT'.includes(name)) {
    return seloGarantiaPT
  } else if ('img/garantia/selo-garantia-ES'.includes(name)) {
    return seloGarantiaES
  } else {
    return seloGarantiaEN
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