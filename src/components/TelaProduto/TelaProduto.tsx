import Ebook from '@/interfaces/Ebook';
import { lazy, useEffect } from 'react';
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

interface TelaProdutoProps { ebookAtual: Ebook }

function TelaProduto({ebookAtual}: TelaProdutoProps) {
  const deveExibirPreco = (ebookAtual.bonus.exibirPrecoAposBeneficios && ebookAtual.bonus.exibirPrecoBonus);
  const uuidRotaParabens = '2742f4da-4f27-45d6-b3bc-bca71385ed57';

  const purchaseEventParabens = () => {
    fbq.event('Purchase', { currency: 'BRL', value: 49.99 })
  }
  
  useEffect(() => {
    if (ebookAtual.uuid === uuidRotaParabens) {
      purchaseEventParabens()
    }
  },[ebookAtual.uuid])

  return (
    <div className='ProdutoEspecifico' id={`headline--${ebookAtual.idStyledByProduct}`}>

      <ConfettiDisplay 
        title={ebookAtual.bonus.titleHeadlineParabens} 
        subtitle={ebookAtual.bonus.subtitleHeadlineParabens}
        shouldShowConfetti={ebookAtual.isFunil} 
      />

      <Headline 
        descricaoEbook={ebookAtual.descricao} 
        nameEbook={ebookAtual.nome} 
        textButtonToBuy={ebookAtual.textButtonToBuy} 
        urlComprarProduto={ebookAtual.urlComprarProduto}
        urlCapaEbook={ebookAtual.urlImageCapa}
      />

      <Aprendizados 
        aprendizados={ebookAtual.aprendizados} 
        language={ebookAtual.linguagem} 
        textButtonToBuy={ebookAtual.textButtonToBuy} 
        urlComprarProduto={ebookAtual.urlComprarProduto}
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
        language={ebookAtual.linguagem} 
        urlImagesDepoimentos={ebookAtual.urlImagesDepoimentos} 
        tituloDepoimentos={ebookAtual.tituloDepoimentos}
        urlComprarProduto={ebookAtual.urlComprarProduto}
      />

      <HeadlineBonus
        moeda={ebookAtual.moeda}
        language={ebookAtual.linguagem}
        urlCapaEbook={ebookAtual.urlImageCapaBonus}
        precoMaior={ebookAtual.bonus.precoMaior}
        precoMenor={ebookAtual.bonus.precoMenor}
        itensHeadlineFinal={ebookAtual.itensHeadlineFinal}
        tituloBonus={ebookAtual.tituloBonus}
        exibirPrecoAposBeneficios={ebookAtual.bonus.exibirPrecoAposBeneficios}
        textoBonusEbookPrincipal={ebookAtual.bonus.textoBonusEbookPrincipal}
        titleHeadlineEbookBonus={ebookAtual.bonus.titleHeadlineEbookBonus}
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
          fraseEmbaixoDoPreco={ebookAtual.bonus.fraseEmbaixoDoPreco}
          avisoEmbaixoDoPreco={ebookAtual.avisoEmbaixoDoPreco}
        />
      </div>

      <div className={`Garantia__text fraseEmbaixoDoTextIsolada price__isVisible--${ebookAtual.bonus.exibirFraseEmbaixoDoPrecoIsolada}`}>
        {ebookAtual.bonus.fraseEmbaixoDoPreco}
      </div>

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
        textButtonToBuyPackBonus={ebookAtual.textButtonToBuyPackBonus}
        existeTerceiroBonus={ebookAtual.existeTerceiroBonus}
        urlComprarProduto={ebookAtual.urlComprarProduto}
        urlComprarPackBonus={ebookAtual.urlComprarPackBonus}
        urlCapaEbookPrincipal={ebookAtual.urlImageCapaSecudaria}
        urlCapaEbookSegundoBonus={ebookAtual.urlImageCapaBonusSecudaria}
        textoOpcao1HeadlineFinal={ebookAtual.textoOpcao1HeadlineFinal}
        textoOpcao2HeadlineFinal={ebookAtual.textoOpcao2HeadlineFinal}
        avisoEmbaixoDoPreco={ebookAtual.avisoEmbaixoDoPreco}
      />

      <SuporteWhatsapp language={ebookAtual.linguagem} urlLinkWhatsapp={ebookAtual.urlLinkWhatsapp} />

      <Faq idStyledByProduct={`FAQ--${ebookAtual.idStyledByProduct}`} language={ebookAtual.linguagem} />
    </div>
  )
}

export default TelaProduto