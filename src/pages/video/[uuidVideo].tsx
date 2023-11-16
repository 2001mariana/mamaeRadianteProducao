import { getProductByUuid } from '@/data/Utils/Produtos'
import Ebook from '@/interfaces/Ebook';
import { useEffect, useState } from 'react';
import NotFound from '@/components/NotFound';
import LupaLoading from '@/components/LupaLoading';
import { ProdutosDisponiveis } from '@/data/Produtos/ProdutosDisponiveis';
import TelaVideo from '@/components/TelaVideo';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = ProdutosDisponiveis.map((post) => ({
    params: { uuidVideo: post.uuidVideo },
  }))
 
  return { paths, fallback: false }
}

type Params = {
  params: { uuidVideo: string }
}

export async function getStaticProps( params: Params) {
  const ebook = await getProductByUuid(params.params.uuidVideo)
  return { props: { ebook } }
}
 
function Index(props: {
  ebook: Ebook | undefined;
}) {
  
  const [exibirLoading, setExibirLoading] = useState<boolean>(true);
  const [ebookAtual, setEbookAtual] = useState<Ebook|undefined>(undefined);

  const ebookCarregado = (ebook: Ebook) => {
    setEbookAtual(ebook)
    setExibirLoading(false)
  }

  useEffect(() => {
    props.ebook && ebookCarregado(props.ebook) 
  },[props.ebook])


  if (exibirLoading) {
    return <LupaLoading />
  } else if (ebookAtual !== undefined) {
    return <TelaVideo ebookAtual={ebookAtual} />
  } else {
    return <NotFound />
  }
}

export default Index