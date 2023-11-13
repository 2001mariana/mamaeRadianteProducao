import React, { useEffect, useState } from "react";

import Preco from "../Preco";
import MyImage from "../MyImageLazy";
import Link from "next/link";
import Button from "../Button";
import { rotasParabens } from "@/data/Produtos/ProdutosDisponiveis";

interface HeadlineFinalProps {
    moeda: '€' | 'R$' | '$'
    language: 'PT' | 'ES' | 'ENG'
    precoMaior: string
    precoMenor: string
    titulo?: string[]
    textButtonToBuy: string
    nameEbookButton: string
    avisoEmbaixoDoPreco: string
    urlComprarProduto: string
    urlComprarPackBonus?: string
    existeTerceiroBonus: boolean
    urlCapaEbookPrincipal: string
    subtituloHeadlineFinal?: string
    urlCapaEbookSegundoBonus?: string
    precoMaiorAdquirindoTodos?: string
    precoMenorAdquirindoTodos?: string
    textoOpcao1HeadlineFinal?: string
    textoOpcao2HeadlineFinal?: string    
    textButtonToBuyPackBonus?: string
}

const HeadlineFinal = ({ 
    moeda, 
    precoMaior, 
    precoMenor, 
    titulo,
    textButtonToBuy,
    nameEbookButton, 
    language,
    existeTerceiroBonus,   
    avisoEmbaixoDoPreco,
    urlComprarProduto, 
    urlComprarPackBonus,
    urlCapaEbookPrincipal,
    urlCapaEbookSegundoBonus,
    subtituloHeadlineFinal,
    precoMaiorAdquirindoTodos,
    precoMenorAdquirindoTodos,
    textoOpcao1HeadlineFinal,
    textoOpcao2HeadlineFinal,
    textButtonToBuyPackBonus
  }: HeadlineFinalProps) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const urlPackBonus = (urlComprarPackBonus ? urlComprarPackBonus : 'teste');
    const bonusSecondOption = (existeTerceiroBonus && urlCapaEbookSegundoBonus !== undefined);
    const textButtonPack = (textButtonToBuyPackBonus ? textButtonToBuyPackBonus : textButtonToBuy)
    const bonusComboWithPrice = (bonusSecondOption && precoMaiorAdquirindoTodos !== undefined && precoMenorAdquirindoTodos !== undefined);

  function shouldShowButton(widthSize: number) {
    if (rotasParabens.includes(nameEbookButton)) {
      return true
    } else if (widthSize < 1040 ) {
      return false
    } else {
      return true
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    shouldShowButton(windowSize)
  }, [windowSize])

  return (
    <div className='HeadlineFinal HeadlineBonus'>
      { titulo ? 
        <span className='ProdutoEspecifico__tittle'>
          {titulo.map((texto) => <div key={texto}>{texto}</div>)}
        </span> : null
      }
      {
        subtituloHeadlineFinal ? 
        <div className='Garantia__text'>{ subtituloHeadlineFinal }</div>
        : null
      }
      {
        textoOpcao1HeadlineFinal ? 
          <div className='Round__text--white'>{textoOpcao1HeadlineFinal}</div>
        : null
      }
      
      <div className="dynamic__image">
          <MyImage nameImage={urlCapaEbookPrincipal} />
      </div>
      <div className='HeadlineBonus__content'>
        <div className='HeadlineBonus__content--image'>
          <MyImage nameImage={urlCapaEbookPrincipal} />
        </div>
        <div className='HeadlineBonus__content--text'>
          <Preco 
            language={language} 
            moeda={moeda}
            precoMaior={precoMaior}
            precoMenor={precoMenor}
            textButtonToBuy={textButtonToBuy}
            nameEbookButton={`${nameEbookButton}-4`}
            urlComprarProduto={urlComprarProduto}
            shouldShowButtonBuy={shouldShowButton(windowSize)}
            avisoEmbaixoDoPreco={avisoEmbaixoDoPreco}
          />
        </div> 
      </div>
      {
        bonusComboWithPrice &&   
      <>
          <div className="HeadlineBonus__ou">Ou</div>

          
          {
            textoOpcao2HeadlineFinal ? 
              <div className='Round__text--white'>{textoOpcao2HeadlineFinal}</div>
            : null
          }

          <div className='HeadlineBonus__content second-option'>
            <div className='car'>
              <MyImage nameImage={urlCapaEbookPrincipal} />
              <div className="HeadlineBonus__ou">+</div> 
              <MyImage nameImage={urlCapaEbookSegundoBonus} />
            </div>
            <div className='HeadlineBonus__content--text'>
              <Preco 
                language={language} 
                moeda={moeda}
                precoMaior={precoMaiorAdquirindoTodos}
                precoMenor={precoMenorAdquirindoTodos}
                textButtonToBuy={textButtonPack}
                nameEbookButton={`${nameEbookButton}-4`}
                urlComprarProduto={urlPackBonus}
                shouldShowButtonBuy={shouldShowButton(windowSize)}
                avisoEmbaixoDoPreco={avisoEmbaixoDoPreco}
              />
            </div> 
          </div>
      </>
    }
      <div className={`ProdutoEspecifico__headline--button-${!shouldShowButton(windowSize)}`}>
        <Link className='ProdutoEspecifico__headline--button-buy' href={urlPackBonus}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            id={`${nameEbookButton}-4`}
            text={textButtonPack} 
          />
        </Link>
      </div>
    </div>
  )}

export default HeadlineFinal