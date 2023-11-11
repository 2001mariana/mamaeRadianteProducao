import Image from 'next/image'

import amamentacaoESIntroducao from '../../assets/img/ebook-amamentacao-es/amamentacaoESIntroducao.svg'
import amamentacaoESSumario1 from '../../assets/img/ebook-amamentacao-es/amamentacaoESSumario1.svg'
import amamentacaoESSumario2 from '../../assets/img/ebook-amamentacao-es/amamentacaoESSumario2.svg'

import amamentacaoPTIntroducao from '../../assets/img/ebook-amamentacao-pt/amamentacaoPTIntroducao.svg'
import amamentacaoPTSumario1 from '../../assets/img/ebook-amamentacao-pt/amamentacaoPTSumario1.svg'
import amamentacaoPTSumario2 from '../../assets/img/ebook-amamentacao-pt/amamentacaoPTSumario2.svg'

import guiaDeModasSumario1 from '../../assets/img/ebook-guiaDeModas/guiaDeModasSumario1.png'
import guiaDeModasSumario2 from '../../assets/img/ebook-guiaDeModas/guiaDeModasSumario2.png'
import guiaDeModasSumario3 from '../../assets/img/ebook-guiaDeModas/guiaDeModasSumario3.png'
import guiaDeModasSumario4 from '../../assets/img/ebook-guiaDeModas/guiaDeModasSumario4.png'
import guiaDeModasIntroducao from '../../assets/img/ebook-guiaDeModas/guiaDeModasIntroducao.png'

import ptIntroducao1 from '../../assets/img/ebook-gravida-pt/ptGravidezRadianteIntroducao1.png'
import ptIntroducao2 from '../../assets/img/ebook-gravida-pt/ptGravidezRadianteIntroducao2.png'
import ptSumario1 from '../../assets/img/ebook-gravida-pt/ptGravidezRadianteSumario1.png'
import ptSumario2 from '../../assets/img/ebook-gravida-pt/ptGravidezRadianteSumario2.png'

import esIntroducao1 from '../../assets/img/ebook-gravida-es/esGravidezRadianteIntroducao1.png'
import esIntroducao2 from '../../assets/img/ebook-gravida-es/esGravidezRadianteIntroducao2.png'
import esSumario1 from '../../assets/img/ebook-gravida-es/esGravidezRadianteCapitulo1.png'
import esSumario2 from '../../assets/img/ebook-gravida-es/esGravidezRadianteCapitulo2.png'

import { Suspense } from 'react'
import SearchAnimaton from '../SearchAnimaton'

export function getImageByName(name: string) {
  if ('../../assets/img/ebook-gravida-pt/ptGravidezRadianteIntroducao1.png'.includes(name)) {
    return ptIntroducao1
  } else if ('../../assets/img/ebook-gravida-pt/ptGravidezRadianteIntroducao2.png'.includes(name)) {
    return ptIntroducao2
  } else if ('../../assets/img/ebook-gravida-pt/ptGravidezRadianteSumario1.png'.includes(name)) {
    return ptSumario1
  } else  if ('../../assets/img/ebook-gravida-pt/ptGravidezRadianteSumario2.png'.includes(name)) {
    return ptSumario2
  } else if ('../../assets/img/ebook-gravida-es/esGravidezRadianteIntroducao1.png'.includes(name)) {
    return esIntroducao1
  } else if ('../../assets/img/ebook-gravida-es/esGravidezRadianteIntroducao2.png'.includes(name)) {
    return esIntroducao2
  } else if ('../../assets/img/ebook-gravida-es/esGravidezRadianteCapitulo1.png'.includes(name)) {
    return esSumario1
  } else if ('../../assets/img/ebook-gravida-es/esGravidezRadianteCapitulo2.png'.includes(name)) {
    return esSumario2
  } else if ('../../assets/img/ebook-guiaDeModas/guiaDeModasSumario1'.includes(name)) {
    return guiaDeModasSumario1
  } else if ('../../assets/img/ebook-guiaDeModas/guiaDeModasSumario2'.includes(name)) {
    return guiaDeModasSumario2
  } else if ('../../assets/img/ebook-guiaDeModas/guiaDeModasSumario3'.includes(name)) {
    return guiaDeModasSumario3
  } else if ('../../assets/img/ebook-guiaDeModas/guiaDeModasSumario4'.includes(name)) {
    return guiaDeModasSumario4
  } else if ('../../assets/img/ebook-guiaDeModas/guiaDeModasIntroducao'.includes(name)) {
    return guiaDeModasIntroducao
  } else if ('../../assets/img/ebook-amamentacao-pt/amamentacaoPTIntroducao.svg'.includes(name)) {
    return amamentacaoPTIntroducao
  } else if ('../../assets/img/ebook-amamentacao-pt/amamentacaoPTSumario1.svg'.includes(name)) {
    return amamentacaoPTSumario1
  } else if ('../../assets/img/ebook-amamentacao-pt/amamentacaoPTSumario2.svg'.includes(name)) {
    return amamentacaoPTSumario2
  } else if ('../../assets/img/ebook-amamentacao-es/amamentacaoESIntroducao.svg'.includes(name)) {
    return amamentacaoESIntroducao
  } else if ('../../assets/img/ebook-amamentacao-es/amamentacaoESSumario1.svg'.includes(name)) {
    return amamentacaoESSumario1
  } else if ('../../assets/img/ebook-amamentacao-es/amamentacaoESSumario2.svg'.includes(name)) {
    return amamentacaoESSumario2
  } else {
    return esSumario2
  }
}
interface MyImageProps {
    nameImage: string
    priority?: boolean
}

const MyImagePrevia = ({ nameImage, priority = false }: MyImageProps) => {
  return (
    <Suspense fallback={<SearchAnimaton />}>
      <Image priority={priority} src={getImageByName(nameImage)} alt='100%' />
    </Suspense>
)}

export default MyImagePrevia