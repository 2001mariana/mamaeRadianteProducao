import { useContext } from "react";
import { LanguageContext } from "@/pages/_app";
import LanguageControl from "../LanguageControl";

function Header() {
  const {contextValue }  = useContext(LanguageContext);

  function getTitleByLanguage(language: 'PT' | 'ES' | 'ENG' | '') {
    if (language === 'ES') {
      return 'Universo de las embarazadas'
    } else if (language === 'PT') {
      return 'Universo das gestantes'
    } else {
      return "Pregnant women's universe"
    }
  }

  return (
    <header className="Header">
      <div>{getTitleByLanguage(contextValue)}</div>
      <LanguageControl />
    </header>
  );
}

export default Header;
