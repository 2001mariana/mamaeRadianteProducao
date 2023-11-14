import CardEbook from "@/components/CardEbook";
import MyImage from "@/components/MyImage";
import { LanguageContext } from "@/pages/_app";
import { ProdutosDisponiveis } from "@/data/Produtos/ProdutosDisponiveis";
import { useContext } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

function Produtos() {
  const { contextValue }  = useContext(LanguageContext);

  function filterEbooksByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    return ProdutosDisponiveis.filter((ebook) => ebook.linguagem === language && ebook.isFunil === false)
  }

  return (
    <>
      <div className="Produtos">
        <Header />
        <div className="Produtos__cards">
          {filterEbooksByLanguage(contextValue).map((ebook) => (
            <CardEbook key={ebook.uuid} preco={ebook.precoMenor} moeda={ebook.moeda} urlDetalhe={ebook.uuid}>
              <MyImage priority nameImage={ebook.urlImageCapaSecudaria} /> 
            </CardEbook>
          ))}
        </div>
        <Footer deveExibirLogo={false} />
      </div>
    </>
  );
}

export default Produtos;
