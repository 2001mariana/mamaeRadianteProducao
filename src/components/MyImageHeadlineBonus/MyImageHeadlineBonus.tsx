import Image from 'next/image'

import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import infinity from '../../assets/icons/infinity.svg'
import cadeadoAberto from '../../assets/icons/novo-cadeado.svg'
import vip from '../../assets/icons/grupo-vip.png'
import desconto from '../../assets/icons/desconto.svg'

import { Suspense } from 'react'
import SearchAnimaton from '../SearchAnimaton'

export function getImageByName(name: string) {
  if ('icons/telegram.svg'.includes(name)) {
    return telegram
  } else if ('icons/whatsapp.svg'.includes(name)) {
    return whatsapp
  } else if ('icons/vip.svg'.includes(name)) {
    return vip
  } else if ('icons/infinity.svg'.includes(name)) {
    return infinity
  } else if ('icons/cadeado-aberto.svg'.includes(name)) {
    return cadeadoAberto
  } else if ('icons/desconto'.includes(name)) {
    return desconto
  } else {
    return infinity
  }
}
interface MyImageProps {
    nameImage: string
    priority?: boolean
}

const MyImage = ({ nameImage, priority = false }: MyImageProps) => {
  return (
    <Suspense fallback={<SearchAnimaton />}>
      <Image priority={priority} src={getImageByName(nameImage)} alt='100%' />
    </Suspense>
)}

export default MyImage