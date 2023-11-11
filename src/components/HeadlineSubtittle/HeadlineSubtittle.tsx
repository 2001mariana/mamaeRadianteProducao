interface HeadlineSubtittleProps {
    ebookPrincipal: string
    ebookBonus: string
    language: 'PT' | 'ES' | 'ENG'
}

const HeadlineSubtittle = ({ ebookBonus, ebookPrincipal, language }: HeadlineSubtittleProps) => {

  if (language === 'ES') {
    return (
      <div className='ProdutoEspecifico__headline--subtittle'>
        Si eliges tener {ebookPrincipal}, aún te vamos a 
        <span className='ProdutoEspecifico__headline--foco'> REGALAR </span> 
        con este regalo más que especial: ¡una oportunidad 
        <span className='ProdutoEspecifico__headline--foco'> ÚNICA </span> 
        de obtener también  {ebookBonus} casi gratis!
      </div>
    )
  } else if (language === 'PT') {
    return (
      <div className='ProdutoEspecifico__headline--subtittle'>
        Caso você escolha ter {ebookPrincipal}, nós ainda vamos te 
        <span className='ProdutoEspecifico__headline--foco'> PRESENTEAR </span> 
        com este mimo mais que especial: uma oportunidade 
        <span className='ProdutoEspecifico__headline--foco'> ÚNICA </span> 
        de ter também  {ebookBonus} quase de graça!
      </div>
    )
  } else {
    return (
      <div className='ProdutoEspecifico__headline--subtittle'>
        If you choose to have {ebookPrincipal}, we will still 
        <span className='ProdutoEspecifico__headline--foco'> GIFT </span> 
        you with this more than special treat: a 
        <span className='ProdutoEspecifico__headline--foco'> UNIQUE </span> 
        opportunity to also get {ebookBonus} almost for free!
      </div>
    )
  }
}

export default HeadlineSubtittle