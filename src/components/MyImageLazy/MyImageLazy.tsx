import { Suspense, lazy } from 'react';
import SearchAnimaton from '../SearchAnimaton';

interface MyImageLazyProps {
    nameImage: string
    priority?: boolean
}

const ImageLazy = lazy(() => import('../MyImage'));

const MyImageLazy = ({ nameImage, priority = false }: MyImageLazyProps) => {
  return (
    <Suspense fallback={<SearchAnimaton />}>      
      <ImageLazy priority={priority} nameImage={nameImage} />
    </Suspense>
)}

export default MyImageLazy