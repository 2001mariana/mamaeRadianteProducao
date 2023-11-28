import Link from 'next/link';
import Button from '../Button';

interface TelaProdutoProps { textButtonCTA: string; urlComprarProduto: string; }

function TelaProduto({textButtonCTA, urlComprarProduto}: TelaProdutoProps) {
  return (
    <>
      <div className='ProdutoEspecifico__video'>
        <div className='ProdutoEspecifico__video--messias'>
          <iframe loading="lazy" 
            style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0", margin: "0"}}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0DojBOyI&#x2F;watch?embed" allow="fullscreen">
          </iframe>
        </div>
      </div>

      <div className='video__button-cta'>
        <Link href={urlComprarProduto}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            text={textButtonCTA}
          />
        </Link>
      </div>
    </>
  )
}

export default TelaProduto