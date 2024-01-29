import Image from 'next/image'

import seloGarantiaEN from '../../assets/img/garantia/selo-garantia-EN.svg'

import GarantiaES from '../../assets/img/garantia/garantia-ES.svg'
import GarantiaESMobile from '../../assets/img/garantia/garantia-ES-mobile.svg'
import GarantiaPT from '../../assets/img/garantia/garantia-PT.svg'
import GarantiaPTMobile from '../../assets/img/garantia/garantia-PT-mobile.svg'

export function getImageByName(name: string) {
  // if ('img/garantia/selo-garantia-PT'.includes(name)) {
  //   return seloGarantiaPT
  // } else if ('img/garantia/selo-garantia-ES'.includes(name)) {
  //   return seloGarantiaES
  // } else if ('garantia/garantia-ES.svg'.includes(name)) {
  if ('garantia/garantia-ES.svg'.includes(name)) {
    return GarantiaES
  } else if ('garantia/garantia-ES-mobile.svg'.includes(name)) {
    return GarantiaESMobile
  } else if ('garantia/garantia-PT.svg'.includes(name)) {
    return GarantiaPT
  } else if ('garantia/garantia-PT-mobile.svg'.includes(name)) {
    return GarantiaPTMobile
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
    <Image className="CardNeon--Purple" width={230} height={415} priority={priority} src={getImageByName(nameImage)} alt='100%' />
)}

export default MyImage