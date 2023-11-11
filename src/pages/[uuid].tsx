import { getProductByUuid } from '@/data/Utils/Produtos'
import Ebook from '@/interfaces/Ebook';
import { useEffect, useRef, useState } from 'react';
import TelaProduto from '@/components/TelaProduto';
import NotFound from '@/components/NotFound';
import LupaLoading from '@/components/LupaLoading';
import { ProdutosDisponiveis } from '@/data/Produtos/ProdutosDisponiveis';

export async function getStaticPaths() {
  const paths = ProdutosDisponiveis.map((post) => ({
    params: { uuid: post.uuid },
  }))
 
  return { paths, fallback: false }
}

type Params = {
  params: { uuid: string }
}

export async function getStaticProps( params: Params) {
  const post = await getProductByUuid(params.params.uuid)
  return { props: { post } }
}
 
function Index(props: {
  post: Ebook | undefined;
}) {
  
  const [exibirLoading, setExibirLoading] = useState<boolean>(true);
  const [ebookAtual, setEbookAtual] = useState<Ebook|undefined>(undefined);

  const ebookCarregado = (ebook: Ebook) => {
    setEbookAtual(ebook)
    setExibirLoading(false)
  }

  useEffect(() => {
    props.post && ebookCarregado(props.post) 
  },[props.post])


  if (exibirLoading) {
    return <LupaLoading />
  } else if (ebookAtual !== undefined) {
    return <TelaProduto ebookAtual={ebookAtual} />
  } else {
    return <NotFound />
  }
}

export default Index