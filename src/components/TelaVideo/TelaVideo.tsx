import Link from 'next/link';
import Button from '../Button';
import Introducao from '../Introducao';
import CardBeneficios from '../CardBeneficios';
import Ebook from '@/interfaces/Ebook';
import { lazy, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PixelDisplay from '../PixelDisplay/PixelDisplay';
import SuporteWhatsapp from '../SuporteWhatsapp/SuporteWhatsapp';
import Footer from '../Footer';
const Depoimentos = lazy(() => import('@/components/Depoimentos'));

interface TelaVideoProps { 
  ebookAtual: Ebook;
  existePixel: boolean
  exibirBotaoVerPagina: boolean
  isVisibleFooter: boolean
  isVisibleWhatsapp: boolean
  isVisibleDepoimentos: boolean
}

function TelaVideo({ 
    ebookAtual, 
    existePixel, 
    exibirBotaoVerPagina, 
    isVisibleFooter, 
    isVisibleWhatsapp, 
    isVisibleDepoimentos
  }: TelaVideoProps) {
  const [parametroFacebook, setParametroFacebook] = useState<string>('');
  const [exibirBotaoCTA, setExibirBotaoCTA] = useState<boolean>(false);
  const [urlComprarComParametro, setUrlComprarComParametro] = useState<string>(ebookAtual.urlComprarProduto);  
  const router = useRouter();  

  useEffect(() => {
    if (exibirBotaoCTA === false) {
      setTimeout(() => setExibirBotaoCTA(true), 580000)
    }

  }, [exibirBotaoCTA])

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

      <div className='ProdutoEspecifico__video' onFocus={() => console.log("Test focus")}>
        <iframe  
          width="100%" 
          height="100%" 
          src={ebookAtual.urlVideoYoutube} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
        />
      </div>

      {(exibirBotaoCTA === true) ? 
        <div className='ProdutoEspecifico__content--buy'>
            <Link href={urlComprarComParametro}>
              <Button 
                className='animation-pulse' 
                variant='neon' 
                color='Green' 
                size='Large' 
                text={ebookAtual.textButtonToBuy} 
              />
            </Link>
        </div>
      : null }


      { 
        exibirBotaoVerPagina ? 
          <CardBeneficios 
            itensHeadlineFinal={ebookAtual.itensHeadlineFinal} 
            language={ebookAtual.linguagem} 
            titleHeadlineEbookBonus={ebookAtual.bonus.titleHeadlineEbookBonus} 
            exibirBotaoCTA={exibirBotaoCTA}
            textButtonToBuy={ebookAtual.textButtonToBuy}
            urlComprarProduto={`${ebookAtual.urlComprarProduto}${parametroFacebook}`}
          />
        : null
      }

      {
        isVisibleDepoimentos ? 
          <Depoimentos 
            textButtonToBuy={ebookAtual.textButtonToDepoimentos} 
            nameEbookButton={ebookAtual.nomeEbook}
            language={ebookAtual.linguagem} 
            urlImagesDepoimentos={ebookAtual.urlImagesDepoimentos} 
            tituloDepoimentos={ebookAtual.tituloDepoimentos}
            urlComprarProduto={urlComprarComParametro}
            isVisibleButton={exibirBotaoCTA}
          />
        : null
      }

      { 
        exibirBotaoVerPagina ? 
          <>
            <span className='ProdutoEspecifico__tittle'>
              Não consegue ver o vídeo ou prefere ler, clique no botão abaixo:
            </span>

            <div className='ProdutoEspecifico__content--buy'>
              <Link href={`../../${ebookAtual.uuid}${parametroFacebook}`}>
                <Button 
                  variant='outlined' 
                  color='Green' 
                  size='Large' 
                  text='Ver conteúdo escrito'
                />
              </Link>
            </div>
          </> 
        : null 
      }
      
      {
        isVisibleWhatsapp ? <SuporteWhatsapp language={ebookAtual.linguagem} urlLinkWhatsapp={ebookAtual.urlLinkWhatsapp} /> : null
      }

      {
        isVisibleFooter ? <Footer deveExibirLogo={true} /> : null
      }
    </div>
  )
}

export default TelaVideo