import Ebook from '@/interfaces/Ebook';
import Link from 'next/link';
import Button from '../Button';
import NotFound from '../NotFound';

interface TelaProdutoProps { ebookAtual: Ebook }

function TelaProduto({ebookAtual}: TelaProdutoProps) {

if (ebookAtual.urlVideoYoutube) {
  return (
    <div className='ProdutoEspecifico TelaVideo' id={`headline--${ebookAtual.idStyledByProduct}`}>
    <div className='ProdutoEspecifico__tittle'>{ebookAtual.nome}</div>
    <div className='ProdutoEspecifico__video'>
      <iframe 
        width="100%" 
        height="100%" 
        src={ebookAtual.urlVideoYoutube} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
      />
    </div>

      <div className='video__button-cta'>
        <Link href={`../../${ebookAtual.uuid}`}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            text='Ir para a página' 
          />
        </Link>
      </div>
    </div>
  )} else {
    return <NotFound />
  }
}

export default TelaProduto