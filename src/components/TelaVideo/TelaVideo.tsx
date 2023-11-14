import Ebook from '@/interfaces/Ebook';
import Link from 'next/link';
import Button from '../Button';
import NotFound from '../NotFound';
import Footer from '../Footer';

interface TelaProdutoProps { ebookAtual: Ebook }

function TelaProduto({ebookAtual}: TelaProdutoProps) {

if (ebookAtual.urlVideoYoutube) {
  return (
    <div className='ProdutoEspecifico TelaVideo' id={`headline--${ebookAtual.idStyledByProduct}`}>
    <div className='ProdutoEspecifico__tittle'>{ebookAtual.nome}</div>
    <div className='ProdutoEspecifico__video'>
      {/* <iframe 
        width="100%" 
        height="100%" 
        src={ebookAtual.urlVideoYoutube} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
      /> */}
      <div className='ProdutoEspecifico__video--messias' 
      // style={{position: "relative", width: "65%", height: "0", paddingTop: "65.0000%", marginTop: '1em',
      //              paddingBottom: "0", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",  
      //              marginBottom: "0.9em", overflow: "hidden", borderRadius: "8px", willChange: "transform"
      //             }}
                  >
        <iframe loading="lazy" 
          style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0", margin: "0"}}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0DojBOyI&#x2F;watch?embed" allow="fullscreen">
        </iframe>
      </div>

    </div>

      <div className='video__button-cta'>
        <Link href={ebookAtual.urlComprarProduto}>
          <Button 
            className='animation-pulse' 
            variant='neon' 
            color='Green' 
            size='Large' 
            text={ebookAtual.textButtonToBuy} 
          />
        </Link>
        <Link href={`../../${ebookAtual.uuid}`}>
          <Button 
            className='animation-pulse' 
            variant='outlined' 
            color='Green' 
            size='Large' 
            text='Eu quero saber mais' 
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