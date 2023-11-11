interface CapituloProps {
    index: number,
    text: string
}

export default function Capitulo({ index, text }: CapituloProps) {
    return (
        <li className='Capitulo'>
          <span className='capitulo--number'>{index}</span>
          <p className='capitulo--text'>{text}</p>
        </li>
    )
}
