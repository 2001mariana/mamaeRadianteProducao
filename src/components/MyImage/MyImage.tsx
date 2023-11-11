import Image from 'next/image'

import capaAmamentacaoES from '../../assets/img/capas-ebooks/amamentacao-es.png'
import capaAmamentacaoES2 from '../../assets/img/capas-ebooks/amamentacao-es-2.png'

import capaAmamentacaoPT from '../../assets/img/capas-ebooks/amamentacao-pt.png'
import capaAmamentacaoPT2 from '../../assets/img/capas-ebooks/amamentacao-pt-2.png'

import capaGuiaModasBebe from '../../assets/img/capas-ebooks/guia-de-modas-bb.png'
import capaGuiaModasBebe2 from '../../assets/img/capas-ebooks/guia-de-modas-bb-2.png'

import capaGravidezRadiantePT from '../../assets/img/capas-ebooks/gravidez-radiante-pt.png'
import capaGravidezRadiantePT2 from '../../assets/img/capas-ebooks/gravidez-radiante-pt-2.png'
import capaGravidezRadianteES from '../../assets/img/capas-ebooks/gravidez-radiante-es.png'
import capaGravidezRadianteES2 from '../../assets/img/capas-ebooks/gravidez-radiante-es-2.png'

import { Suspense } from 'react'
import SearchAnimaton from '../SearchAnimaton'

export function getImageByName(name: string) {
  if ('../../assets/img/capas-ebooks/amamentacao-pt'.includes(name)) {
    return capaAmamentacaoPT
  } else if ('../../assets/img/capas-ebooks/amamentacao-pt-2'.includes(name)) {
    return capaAmamentacaoPT2
  } else if ('../../assets/img/capas-ebooks/gravidez-radiante-pt'.includes(name)) {
    return capaGravidezRadiantePT 
  } else if ('../../assets/img/capas-ebooks/gravidez-radiante-pt-2'.includes(name)) {
    return capaGravidezRadiantePT2 
  } else if ('../../assets/img/capas-ebooks/gravidez-radiante-es'.includes(name)) {
    return capaGravidezRadianteES
  } else if ('../../assets/img/capas-ebooks/gravidez-radiante-es-2'.includes(name)) {
    return capaGravidezRadianteES2 
  } else if ('../../assets/img/capas-ebooks/guia-de-modas-bb'.includes(name)) {
    return capaGuiaModasBebe
  } else if ('../../assets/img/capas-ebooks/guia-de-modas-bb-2'.includes(name)) {
    return capaGuiaModasBebe2
  } else if ('../../assets/img/capas-ebooks/amamentacao-es'.includes(name)) {
    return capaAmamentacaoES
  } else {
    return capaAmamentacaoES2
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