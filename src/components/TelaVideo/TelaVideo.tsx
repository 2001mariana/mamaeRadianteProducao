import Link from 'next/link';
import Button from '../Button';
import Introducao from '../Introducao';
import CardBeneficios from '../CardBeneficios';
import Ebook from '@/interfaces/Ebook';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PixelDisplay from '../PixelDisplay/PixelDisplay';

interface TelaVideoProps { 
  ebookAtual: Ebook;
  // textButtonCTA: string; 
  existePixel: boolean
  exibirBotaoVerPagina: boolean
}

function TelaVideo({ ebookAtual, existePixel, exibirBotaoVerPagina}: TelaVideoProps) {
  const [parametroFacebook, setParametroFacebook] = useState<string>('');
  const [urlComprarComParametro, setUrlComprarComParametro] = useState<string>(ebookAtual.urlComprarProduto);  
  const router = useRouter();  

  useEffect(() => {
    const pegarApenasParametrodaRota = () => {   
      const rotaCompleta = router.asPath;
      const apenasParametro = rotaCompleta.replace(`/video/${ebookAtual.uuid}`, '');
   
      return apenasParametro
    }

    const apenasParametro = pegarApenasParametrodaRota()
    setParametroFacebook(apenasParametro)
  },[router.asPath, ebookAtual.uuid])


  useEffect(() => {
    const urlComprarComParametro = `${ebookAtual.urlComprarProduto}${parametroFacebook}`

    setUrlComprarComParametro(urlComprarComParametro)
  },[parametroFacebook, urlComprarComParametro, ebookAtual.urlComprarProduto])

  return (
    <div>
      {
        existePixel ? <PixelDisplay language={ebookAtual.linguagem} /> : null
      }

      <Introducao 
        urlImageIntroducao={ebookAtual.urlImageIntroducao!} 
        urlImageAtencao={ebookAtual.urlImageIntroducaoAtencao}
      /> 

      <div className='ProdutoEspecifico__video'>

        <iframe 
          width="100%" 
          height="100%" 
          src={ebookAtual.urlVideoYoutube} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
        />
      </div>
{
          exibirBotaoVerPagina ? <>
      <div className='video__button-cta'> 
        <Link href={`${ebookAtual.urlComprarProduto}${parametroFacebook}`}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            text={ebookAtual.textButtonToBuy}
          />
        </Link>

       
            <Link href={`../../${ebookAtual.uuid}${parametroFacebook}`}>
              <Button 
                variant='outlined' 
                color='Green' 
                size='Large' 
                text='Ver página'
              />
            </Link>
      </div>

      <CardBeneficios 
        itensHeadlineFinal={ebookAtual.itensHeadlineFinal} 
        language={ebookAtual.linguagem} 
        titleHeadlineEbookBonus={ebookAtual.bonus.titleHeadlineEbookBonus} 
        exibirBotaoCTA={ebookAtual.existeVideo}
        textButtonToBuy={ebookAtual.textButtonToBuy}
        urlComprarProduto={`${ebookAtual.urlComprarProduto}${parametroFacebook}`}
      /></>
          : null
        }

{/*       
{
          exibirBotaoVerPagina ?
      <div className='video__button-cta exibir-somente-mobile'>
        <Link href={ebookAtual.urlComprarProduto}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            text={ebookAtual.textButtonToBuy}
          />
        </Link>
      </div>
      : null } */}
    </div>
  )
}

export default TelaVideo