import Image from 'next/image'

import ptDepoimentoGravidez1 from '../../assets/img/ebook-gravida-pt/registros/registro1.jpg'
import ptDepoimentoGravidez1_2 from '../../assets/img/ebook-gravida-pt/registros/registro1-2.jpg'
import ptDepoimentoGravidez2 from '../../assets/img/ebook-gravida-pt/registros/registro2.jpg'
import ptDepoimentoGravidez3 from '../../assets/img/ebook-gravida-pt/registros/registro3.jpg'
import ptDepoimentoGravidez4 from '../../assets/img/ebook-gravida-pt/registros/registro4.jpg'
import ptDepoimentoGravidez5 from '../../assets/img/ebook-gravida-pt/registros/registro5.jpg'

import ptDepoimentoAmamentacao1 from '../../assets/img/ebook-amamentacao-pt/registros/feedback-1.jpg'
import ptDepoimentoAmamentacao2 from '../../assets/img/ebook-amamentacao-pt/registros/feedback-2.jpg'
import ptDepoimentoAmamentacao3 from '../../assets/img/ebook-amamentacao-pt/registros/feedback-3.jpg'
import ptDepoimentoAmamentacao4 from '../../assets/img/ebook-amamentacao-pt/registros/feedback-4.jpg'
import ptDepoimentoAmamentacao5 from '../../assets/img/ebook-amamentacao-pt/registros/feedback-5.jpg'
import ptDepoimentoAmamentacao5_1 from '../../assets/img/ebook-amamentacao-pt/registros/feedback-5-1.jpg'

import esDepoimentoAmamentacao1 from '../../assets/img/ebook-amamentacao-es/registros/es-amamantacao-1.jpg'
import esDepoimentoAmamentacao1_2 from '../../assets/img/ebook-amamentacao-es/registros/es-amamantacao-1-2.jpg'
import esDepoimentoAmamentacao2 from '../../assets/img/ebook-amamentacao-es/registros/es-amamantacao-2.jpg'
import esDepoimentoAmamentacao3 from '../../assets/img/ebook-amamentacao-es/registros/es-amamantacao-3.jpg'
import esDepoimentoAmamentacao4 from '../../assets/img/ebook-amamentacao-es/registros/es-amamantacao-4.jpg'

import ptDepoimentoGuiaDeModas1 from '../../assets/img/ebook-guiaDeModas/registros/guiaDeModas1.jpg'
import ptDepoimentoGuiaDeModas2 from '../../assets/img/ebook-guiaDeModas/registros/guiaDeModas2.jpg'
import ptDepoimentoGuiaDeModas3 from '../../assets/img/ebook-guiaDeModas/registros/guiaDeModas3.jpg'
import ptDepoimentoGuiaDeModas4 from '../../assets/img/ebook-guiaDeModas/registros/guiaDeModas4.jpg'
import ptDepoimentoGuiaDeModas4_1 from '../../assets/img/ebook-guiaDeModas/registros/guiaDeModas4-1.jpg'
import ptDepoimentoGuiaDeModas5 from '../../assets/img/ebook-guiaDeModas/registros/guiaDeModas5-1.jpg'
import ptDepoimentoGuiaDeModas5_1 from '../../assets/img/ebook-guiaDeModas/registros/guiaDeModas5-2.jpg'

import esDepoimentoGravidez1 from '../../assets/img/ebook-gravida-es/registros/feedback-gravidez-es-1.jpg'
import esDepoimentoGravidez2 from '../../assets/img/ebook-gravida-es/registros/feedback-gravidez-es-2.jpg'
import esDepoimentoGravidez3 from '../../assets/img/ebook-gravida-es/registros/feedback-gravidez-es-3.jpg'
import esDepoimentoGravidez4 from '../../assets/img/ebook-gravida-es/registros/feedback-gravidez-es-4.jpg'

export function getImageByName(name: string) {
  if ('ebook-gravida-pt/registros/registro1.jpg'.includes(name)) {
    return ptDepoimentoGravidez1
  } else if ('ebook-gravida-pt/registros/registro1-2.jpg'.includes(name)) {
    return ptDepoimentoGravidez1_2
  } else if ('ebook-gravida-pt/registros/registro2.jpg'.includes(name)) {
    return ptDepoimentoGravidez2
  } else if ('ebook-gravida-pt/registros/registro3.jpg'.includes(name)) {
    return ptDepoimentoGravidez3
  } else if ('ebook-gravida-pt/registros/registro4.jpg'.includes(name)) {
    return ptDepoimentoGravidez4
  } else if ('ebook-gravida-pt/registros/registro5.jpg'.includes(name)) {
    return ptDepoimentoGravidez5
  } else if ('ebook-gravida-es/registros/feedback-gravidez-es-1.jpg'.includes(name)) {
    return esDepoimentoGravidez1
  } else if ('ebook-gravida-es/registros/feedback-gravidez-es-2.jpg'.includes(name)) {
    return esDepoimentoGravidez2
  } else if ('ebook-gravida-es/registros/feedback-gravidez-es-3.jpg'.includes(name)) {
    return esDepoimentoGravidez3
  } else if ('ebook-gravida-es/registros/feedback-gravidez-es-4.jpg'.includes(name)) {
    return esDepoimentoGravidez4
  } else if ('ebook-amamentacao-pt/registros/feedback-1.jpg'.includes(name)) {
    return ptDepoimentoAmamentacao1
  } else if ('ebook-amamentacao-pt/registros/feedback-2.jpg'.includes(name)) {
    return ptDepoimentoAmamentacao2
  } else if ('ebook-amamentacao-pt/registros/feedback-3.jpg'.includes(name)) {
    return ptDepoimentoAmamentacao3
  } else if ('ebook-amamentacao-pt/registros/feedback-4.jpg'.includes(name)) {
    return ptDepoimentoAmamentacao4
  } else if ('ebook-amamentacao-pt/registros/feedback-5.jpg'.includes(name)) {
    return ptDepoimentoAmamentacao5
  } else if ('ebook-amamentacao-pt/registros/feedback-5-1.jpg'.includes(name)) {
    return ptDepoimentoAmamentacao5_1
  } else if ('registros/guiaDeModas1'.includes(name)) {
    return ptDepoimentoGuiaDeModas1
  } else if ('registros/guiaDeModas2'.includes(name)) {
    return ptDepoimentoGuiaDeModas2
  } else if ('registros/guiaDeModas3'.includes(name)) {
    return ptDepoimentoGuiaDeModas3
  } else if ('registros/guiaDeModas4'.includes(name)) {
    return ptDepoimentoGuiaDeModas4
  } else if ('registros/guiaDeModas4-1'.includes(name)) {
    return ptDepoimentoGuiaDeModas4_1
  } else if ('registros/guiaDeModas5-1'.includes(name)) {
    return ptDepoimentoGuiaDeModas5
  } else if ('registros/guiaDeModas5-2'.includes(name)) {
    return ptDepoimentoGuiaDeModas5_1
  } else if ('ebook-amamentacao-es/registros/es-amamantacao-1'.includes(name)) {
    return esDepoimentoAmamentacao1
  } else if ('ebook-amamentacao-es/registros/es-amamantacao-1-2'.includes(name)) {
    return esDepoimentoAmamentacao1_2
  } else if ('ebook-amamentacao-es/registros/es-amamantacao-2'.includes(name)) {
    return esDepoimentoAmamentacao2
  } else if ('ebook-amamentacao-es/registros/es-amamantacao-3'.includes(name)) {
    return esDepoimentoAmamentacao3
  } else if ('ebook-amamentacao-es/registros/es-amamantacao-4'.includes(name)) {
    return esDepoimentoAmamentacao4
  } else {
    return esDepoimentoGravidez1
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