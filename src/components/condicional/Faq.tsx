import { getAllQuestionAndAnswerByLanguage, getFaqTittleByLanguage } from '@/data/Utils/FaqUtils';
import ExpandItemFAQ from './ExpandItemFAQ';
import { useState } from 'react';

interface FaqProps {
    language: 'PT' | 'ES' | 'ENG'
    idStyledByProduct: string
}

export default function Faq({ language, idStyledByProduct }: FaqProps) {
    const [isActive, setIsActive] = useState<number>(0)

    const setVisible = (index: number) => {
        if (index === isActive) {
            setIsActive(-1)
        } else {
            setIsActive(index)
        }
    }

    return (
        <div className="FAQ" id={idStyledByProduct}>
            <span className='ProdutoEspecifico__tittle'>
                {getFaqTittleByLanguage(language)}
            </span>
            {/* <div className='FAQ--title'>
                {getFaqTittleByLanguage(language)}
            </div> */}

            {getAllQuestionAndAnswerByLanguage(language).map((item, index) => 
              <ExpandItemFAQ
                key={item.question}
                index={index}
                isOpen={isActive === index}
                question={item.question}
                answer={item.answer}
                alternarVisibilidade={setVisible}
              />
            )}
        </div>
    )
}
