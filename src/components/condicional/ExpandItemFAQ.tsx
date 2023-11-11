import If from './If'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

interface ExpandItemProps {
    index: number
    question: string
    answer: string
    isOpen: boolean
    alternarVisibilidade: (index: number) => void
}

export default function ExpandItem({ index, question, answer, isOpen, alternarVisibilidade }: ExpandItemProps) {
    return (
        <div className='ExpandItem'>
            <div className="ExpandItem__question" onClick={() => alternarVisibilidade(index)}>
                <span>{question}</span>
                {isOpen ? <IconChevronUp /> : <IconChevronDown />}
            </div>
            <If teste={isOpen}>
                <div className="ExpandItem__answer">{answer}</div>
            </If>
        </div>
    )
}
