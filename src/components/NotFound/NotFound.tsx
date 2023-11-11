import { useContext } from "react";
import Button from "../Button"
import { LanguageContext } from "@/pages/_app";
import Link from "next/link";
import { getLabelContatoByLanguage, getLabelVerTodosByLanguage, getMessageByLanguage, getTitleByLanguage } from "./NotFoundUtils";

function NotFound() {
  const { contextValue }  = useContext(LanguageContext);

    return <div className="NotFound">
        <div className="NotFound__message">
            <p>{getTitleByLanguage(contextValue)}</p>
            <p>{getMessageByLanguage(contextValue)}</p>
        </div>
        <div className="NotFound__buttons">
          <Link href={`/`}>
            <Button 
              variant="outlined"
              isRounded
              text={getLabelVerTodosByLanguage(contextValue)}
              color="none" 
              size="Large"
            />
          </Link>
          <Link href='https://api.whatsapp.com/send?phone=5524993230596' target="blank">
            <Button 
              variant="outlined"
              isRounded
              text={getLabelContatoByLanguage(contextValue)}
              color="none" 
              size="Large"
            />
          </Link>
        </div>
    </div>
}

export default NotFound