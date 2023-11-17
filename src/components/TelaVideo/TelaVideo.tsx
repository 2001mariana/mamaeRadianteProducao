import Ebook from '@/interfaces/Ebook';
import Link from 'next/link';
import Button from '../Button';
import NotFound from '../NotFound';
import Footer from '../Footer';

interface TelaProdutoProps { ebookAtual: Ebook }

function TelaProduto({ebookAtual}: TelaProdutoProps) {
  const headlineVideo = (ebookAtual.headlineVideo ? ebookAtual.headlineVideo : ebookAtual.nome);

if (ebookAtual.urlVideoYoutube) {
  return (
    <div className='ProdutoEspecifico TelaVideo' id={`headline--${ebookAtual.idStyledByProduct}`}>
    <div className='ProdutoEspecifico__tittle'>{headlineVideo}</div>
    <div className='ProdutoEspecifico__video'>
      <div className='ProdutoEspecifico__video--messias'>
        <iframe loading="lazy" 
          style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0", margin: "0"}}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0DojBOyI&#x2F;watch?embed" allow="fullscreen">
        </iframe>
      </div>
    </div>

      <div className='video__button-cta'>
        <Link href={`../../${ebookAtual.uuid}`}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            text="EU QUERO SABER COMO"
          />
        </Link>
      </div>
      
      <Footer deveExibirLogo={true} />
    </div>
  )} else {
    return <NotFound />
  }
}

export default TelaProduto