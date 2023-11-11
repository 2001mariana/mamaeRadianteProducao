import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/pages/_app";
import Button from "../Button";
import { controlBrowserLanguage } from './LanguageControlUtils';

function LanguageControl() {
  const {contextValue, updateContext}  = useContext(LanguageContext);
  const [isSelectedLanguage, setIsSelectedLanguage] = useState<'PT' | 'ES' | 'ENG' | ''>(contextValue)

  function updateSelectedLanguageToDefaultBrowser() {
    const languageBrowser = window.navigator ? window.navigator.language : '';
    const formatedBrowserLanguage = controlBrowserLanguage(languageBrowser)    
    setIsSelectedLanguage(formatedBrowserLanguage)
  }

  useEffect(() => {
    if (contextValue === "") {
      updateSelectedLanguageToDefaultBrowser()
    }
  }, [contextValue])

  function calculateSelectedClassName(language: 'PT' | 'ES' | 'ENG') {
     if (language === isSelectedLanguage) {
       return 'Button__isSelected--true'
     } else {
       return 'Button__isSelected--false'
     }
  }

  function updateSelectedLanguageAndContext(language: 'PT' | 'ES' | 'ENG') {
    setIsSelectedLanguage(language)
    updateContext(language)
  }

  return (
    <div className="LanguageControl">
        <Button 
          variant="outlined"
          isRounded={false} 
          text="PT" 
          color="none" 
          size="Small" 
          className={calculateSelectedClassName('PT')}
          onClick={() => updateSelectedLanguageAndContext('PT')}
        />
        <Button 
          variant="outlined"
          isRounded={false} 
          text="ES" 
          color="none" 
          size="Small" 
          className={calculateSelectedClassName('ES')}
          onClick={() => updateSelectedLanguageAndContext('ES')}
        />
        {/* <Button 
          variant="outlined"
          isRounded={false} 
          text="EN" 
          color="none" 
          size="Small" 
          className={calculateSelectedClassName('ENG')}
          onClick={() => updateSelectedLanguageAndContext('ENG')}
        /> */}
    </div>
  );
}

export default LanguageControl;
