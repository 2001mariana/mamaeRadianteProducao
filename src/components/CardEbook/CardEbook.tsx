import { useContext } from "react";
import { LanguageContext } from "@/pages/_app";
import Link from "next/link";
import { getVerDetalhesByLanguage } from "./CardEbookUtils";

interface CardEbookProps {
  preco: string
  moeda: '€' | 'R$' | '$'
  urlDetalhe: string
  children: JSX.Element
}

function CardEbook({ preco, moeda, children, urlDetalhe }: CardEbookProps) {
  const { contextValue }  = useContext(LanguageContext);

  return (
    <div className="CardEbook">
        <div className="CardEbook__foto">
          {children}
        </div>
        {/* <div className="CardEbook__preco">{moeda} {preco}</div> */}
        <div className="CardEbook__saiba-mais">
          <Link href={`/${urlDetalhe}`}>{getVerDetalhesByLanguage(contextValue)}</Link>
        </div>
    </div>
  );
}

export default CardEbook;
