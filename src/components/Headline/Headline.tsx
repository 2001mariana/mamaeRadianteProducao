import React from "react";
import Button from '../Button/Button';
import Link from 'next/link';
import MyImage from "../MyImage";

interface HeadlineProps {
    textButtonToBuy: string
    urlComprarProduto: string
    nameEbook: string
    nameEbookButton: string
    descricaoEbook: string[]
    urlCapaEbook: string
    isVisibleButton: boolean
}

const Headline = ({ 
    nameEbook, 
    descricaoEbook, 
    urlComprarProduto, 
    textButtonToBuy, 
    urlCapaEbook, 
    nameEbookButton,
    isVisibleButton
  }: HeadlineProps) => {
  return (
    <div className='ProdutoEspecifico__Headline'>
        <div className='ProdutoEspecifico__image'>
          <MyImage priority={true} nameImage={urlCapaEbook} />
        </div>
        <div className='ProdutoEspecifico__content'>
          <div className='ProdutoEspecifico__tittle'>{nameEbook}</div>
          <div className="dynamic__image">
            <MyImage priority={true} nameImage={urlCapaEbook} />
          </div>
          <div className='ProdutoEspecifico__content--description'>
            {descricaoEbook.map((descricao) => <span className="Headline__paragrafo" key={descricao}>{descricao}</span>)}
          </div>
         
          {
            isVisibleButton ? 
              <div className='ProdutoEspecifico__content--buy'>
                <Link href={urlComprarProduto}>
                  <Button 
                    className='animation-pulse' 
                    variant='neon' 
                    color='Green' 
                    size='Large' 
                    id={`${nameEbookButton}-2`}
                    text={textButtonToBuy} 
                  />
                </Link>
              </div>
            : null
          }
        </div>
      </div>
  )}

export default Headline