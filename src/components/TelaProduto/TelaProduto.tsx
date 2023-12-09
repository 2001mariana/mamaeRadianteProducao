import Ebook from '@/interfaces/Ebook';
import { lazy, useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import * as fbq from '../../lib/fpixel'

const Carousel = lazy(() => import('nuka-carousel'));
const Garantia = lazy(() => import('@/components/Garantia'));
const Faq = lazy(() => import('@/components/condicional/Faq'));
const HeadlineBonus = lazy(() => import('@/components/HeadlineBonus/HeadlineBonus'));
const Depoimentos = lazy(() => import('@/components/Depoimentos'));
const HeadlineFinal = lazy(() => import('@/components/HeadlineFinal'));
const Aprendizados = lazy(() => import('@/components/Aprendizados'));
const Capitulos = lazy(() => import('@/components/Capitulos'));
const BeneficiosBonus = lazy(() => import('@/components/BeneficiosBonus/BeneficiosBonus'));
const ConfettiDisplay = lazy(() => import('@/components/ConfettiDisplay/ConfettiDisplay'));

import { getPreviaTittleByLanguage } from '@/data/Utils/GetAprendizadoByLanguage';
import MyImage from '@/components/MyImagePrevia';
import Headline from '@/components/Headline';
import Preco from '@/components/Preco';
import SuporteWhatsapp from '../SuporteWhatsapp/SuporteWhatsapp';
import Footer from '../Footer';
import Introducao from '../Introducao';
import TelaVideo from '../TelaVideo';
import CardBeneficios from '../CardBeneficios';
import { useRouter } from 'next/router';
import Script from 'next/script';

interface TelaProdutoProps { ebookAtual: Ebook }

function TelaProduto({ebookAtual}: TelaProdutoProps) {
  const [parametroFacebook, setParametroFacebook] = useState<string>('');
  const [urlComprarComParametro, setUrlComprarComParametro] = useState<string>(ebookAtual.urlComprarProduto);
  const deveExibirPreco = (ebookAtual.bonus.exibirPrecoAposBeneficios && ebookAtual.bonus.exibirPrecoBonus);
  const uuidRotaParabens = '2742f4da-4f27-45d6-b3bc-bca71385ed57';
  const router = useRouter();

  useEffect(() => {
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const purchaseEventParabens = () => {
    fbq.event('Purchase', { currency: 'BRL', value: 49.99 })
  }

  const pegarParametroFacebook = () => {
    const rotaCompleta = router.asPath;
    const uuidAtualNaRota = `/${ebookAtual.uuid}?`
    const apenasParametro = rotaCompleta.replace(uuidAtualNaRota, '?')
    setParametroFacebook(apenasParametro)
  }
  
  useEffect(() => {
    if (ebookAtual.uuid === uuidRotaParabens) {
      purchaseEventParabens()
    }
  },[ebookAtual.uuid])
  
  useEffect(() => {
    pegarParametroFacebook()
  },[router])
  
  useEffect(() => {
    const urlComprarComParametro = `${ebookAtual.urlComprarProduto}${parametroFacebook}`
    setUrlComprarComParametro(urlComprarComParametro)
  },[parametroFacebook, urlComprarComParametro, ebookAtual.urlComprarProduto])

  return (
    <>
            
    <div className='ProdutoEspecifico' id={`headline--${ebookAtual.idStyledByProduct}`}>

    <Script
                          id="fb-pixel"
                          strategy="afterInteractive"
                          dangerouslySetInnerHTML={{
                          __html: `
                          !function(f,b,e,v,n,t,s)
                          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                          n.queue=[];t=b.createElement(e);t.async=!0;
                          t.src=v;s=b.getElementsByTagName(e)[0];
                          s.parentNode.insertBefore(t,s)}(window, document,'script',
                          'https://connect.facebook.net/en_US/fbevents.js');
                          fbq('init', '802228641664490');
                          fbq('track', 'PageView');                    
                          `,
                          }}
                        />

      <ConfettiDisplay 
        title={ebookAtual.bonus.titleHeadlineParabens} 
        subtitle={ebookAtual.bonus.subtitleHeadlineParabens}
        shouldShowConfetti={ebookAtual.isFunil} 
      />

      {
        ebookAtual.exibirIntroducao ? 
          <Introducao 
            urlImageIntroducao={ebookAtual.urlImageIntroducao!} 
            urlImageAtencao={ebookAtual.urlImageIntroducaoAtencao}
          /> 
          : null
      }

      { ebookAtual.existeVideo ? 
        <>
          <TelaVideo
            urlComprarProduto={urlComprarComParametro} 
            textButtonCTA={ebookAtual.textButtonToBuy}
          /> 
          <CardBeneficios 
            itensHeadlineFinal={ebookAtual.itensHeadlineFinal} 
            language={ebookAtual.linguagem} 
            titleHeadlineEbookBonus={ebookAtual.bonus.titleHeadlineEbookBonus} 
            exibirBotaoCTA={ebookAtual.existeVideo}
            textButtonToBuy={ebookAtual.textButtonToBuy}
            urlComprarProduto={urlComprarComParametro}
          />
        </>
        : null
      }

      <Headline 
        descricaoEbook={ebookAtual.descricao} 
        nameEbook={ebookAtual.nome} 
        nameEbookButton={ebookAtual.nomeEbook}
        textButtonToBuy={ebookAtual.textButtonToBuy} 
        urlComprarProduto={urlComprarComParametro}
        urlCapaEbook={ebookAtual.urlImageCapa}
      />

      <Aprendizados 
        aprendizados={ebookAtual.aprendizados} 
        language={ebookAtual.linguagem} 
        textButtonToBuy={ebookAtual.textButtonToBuy} 
        nameEbookButton={ebookAtual.nomeEbook}
        urlComprarProduto={urlComprarComParametro}
        urlCardAposBeneficios={ebookAtual.urlCardAposBeneficios}
        tituloBeneficios={ebookAtual.tituloBeneficios}
      />

      <div className='CapituloAndPrevia'>
        <div className='CapituloAndPrevia__conteudo'>
          <Capitulos language={ebookAtual.linguagem} capitulos={ebookAtual.capitulos} />
          <div className='Previa'>
          <span className='ProdutoEspecifico__tittle'>
            {getPreviaTittleByLanguage(ebookAtual.linguagem)}
          </span>
            <Carousel 
              wrapAround={true} 
              renderCenterLeftControls={({ previousSlide }) => (
                <AiOutlineLeft className='Depoimentos__carrossel--seta' onClick={previousSlide} size={40} />
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <AiOutlineRight className='Depoimentos__carrossel--seta' onClick={nextSlide} size={40} />
              )}
            >
              {
                ebookAtual.urlImagesPrevia.map((image) => 
                  <div key={image} className='Previa__max-heigth'>
                    <div className='Previa__imagem'>
                      <MyImage nameImage={image} />
                    </div>
                  </div>
                )
              }
            </Carousel>
          </div>
        </div> 
      </div>
      
      <Depoimentos 
        textButtonToBuy={ebookAtual.textButtonToDepoimentos} 
        nameEbookButton={ebookAtual.nomeEbook}
        language={ebookAtual.linguagem} 
        urlImagesDepoimentos={ebookAtual.urlImagesDepoimentos} 
        tituloDepoimentos={ebookAtual.tituloDepoimentos}
        urlComprarProduto={urlComprarComParametro}
      />

        {
          ebookAtual.existeVideo ? null : 
            <CardBeneficios 
              itensHeadlineFinal={ebookAtual.itensHeadlineFinal} 
              language={ebookAtual.linguagem} 
              titleHeadlineEbookBonus={ebookAtual.bonus.titleHeadlineEbookBonus} 
              exibirBotaoCTA={ebookAtual.existeVideo}
              textButtonToBuy={ebookAtual.textButtonToBuy}
              urlComprarProduto={urlComprarComParametro}
            />
        }

      {
        ebookAtual.existeEbookBonus ? 
          <>
            <HeadlineBonus
              moeda={ebookAtual.moeda}
              language={ebookAtual.linguagem}
              urlCapaEbook={ebookAtual.urlImageCapaBonus}
              precoMaior={ebookAtual.bonus.precoMaior}
              precoMenor={ebookAtual.bonus.precoMenor}
              tituloBonus={ebookAtual.tituloBonus}
              exibirPrecoAposBeneficios={ebookAtual.bonus.exibirPrecoAposBeneficios}
              textoBonusEbookPrincipal={ebookAtual.bonus.textoBonusEbookPrincipal}
              exibirPrecoBonus={ebookAtual.bonus.exibirPrecoBonus}
              avisoEmbaixoDoPreco={ebookAtual.avisoEmbaixoDoPreco}
            />

            <BeneficiosBonus 
              beneficios={ebookAtual.bonus.beneficiosBonus} 
              language={ebookAtual.linguagem}
              titleBeneficiosBonus={ebookAtual.bonus.titleBeneficiosBonus}
              urlCardAposBeneficios={ebookAtual.urlCardAposBeneficiosBonus}
            />
      
            <div className={`dynamic__visible--mobile price__isVisible--${deveExibirPreco}`}>
              <Preco 
                language={ebookAtual.linguagem}
                moeda={ebookAtual.moeda}
                precoMaior={ebookAtual.bonus.precoMaior}
                precoMenor={ebookAtual.bonus.precoMenor}
                shouldShowButtonBuy={false}
                textButtonToBuy=""
                urlComprarProduto=""
                nameEbookButton="falar-com-mariana"
                fraseEmbaixoDoPreco={ebookAtual.bonus.fraseEmbaixoDoPreco}
                avisoEmbaixoDoPreco={ebookAtual.avisoEmbaixoDoPreco}
              />
            </div>

            <div className={`Garantia__text fraseEmbaixoDoTextIsolada price__isVisible--${ebookAtual.bonus.exibirFraseEmbaixoDoPrecoIsolada}`}>
              {ebookAtual.bonus.fraseEmbaixoDoPreco}
            </div>
          </>
        : null
      }

      <Garantia color={ebookAtual.colorNeonGarantia} language={ebookAtual.linguagem} />

      <HeadlineFinal 
        language={ebookAtual.linguagem} 
        moeda={ebookAtual.moeda} 
        titulo={ebookAtual.tituloHeadlineFinal}
        subtituloHeadlineFinal={ebookAtual.subtituloHeadlineFinal}
        precoMaior={ebookAtual.precoMaior}
        precoMenor={ebookAtual.precoMenor}
        precoMaiorAdquirindoTodos={ebookAtual.bonus.precoMaiorAdquirindoTodos}
        precoMenorAdquirindoTodos={ebookAtual.bonus.precoMenorAdquirindoTodos}
        textButtonToBuy={ebookAtual.textButtonToBuy}  
        nameEbookButton={ebookAtual.nomeEbook}
        textButtonToBuyPackBonus={ebookAtual.textButtonToBuyPackBonus}
        existeTerceiroBonus={ebookAtual.existeTerceiroBonus}
        urlComprarProduto={urlComprarComParametro}
        urlComprarPackBonus={ebookAtual.urlComprarPackBonus}
        urlCapaEbookPrincipal={ebookAtual.urlImageCapaSecudaria}
        urlCapaEbookSegundoBonus={ebookAtual.urlImageCapaBonusSecudaria}
        textoOpcao1HeadlineFinal={ebookAtual.textoOpcao1HeadlineFinal}
        textoOpcao2HeadlineFinal={ebookAtual.textoOpcao2HeadlineFinal}
        avisoEmbaixoDoPreco={ebookAtual.avisoEmbaixoDoPreco}
      />

      <SuporteWhatsapp language={ebookAtual.linguagem} urlLinkWhatsapp={ebookAtual.urlLinkWhatsapp} />

      <Faq idStyledByProduct={`FAQ--${ebookAtual.idStyledByProduct}`} language={ebookAtual.linguagem} />

      <Footer deveExibirLogo={true} />
    </div>
    </>
  )
}

export default TelaProduto