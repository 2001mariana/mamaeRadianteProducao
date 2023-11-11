import { useContext } from "react";
import { LanguageContext } from "@/pages/_app";
import LanguageControl from "../LanguageControl";
import Image from "next/image";
import logo from '../../assets/img/logo-mamae-radiante-azul.png'

function Header() {
  const {contextValue }  = useContext(LanguageContext);

  function getTitleByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    if (language === 'ES') {
      return 'Mamá Radiante'
    } else if (language === 'PT') {
      return 'Mamãe Radiante'
    } else {
      return "Radiant Mom"
    }
  }

  return (
    <header className="Header">
      <div className="Header__logo"><Image priority={true} src={logo} alt='100%' /></div>
      <div>{getTitleByLanguage(contextValue)}</div>
      <LanguageControl />
    </header>
  );
}

export default Header;
