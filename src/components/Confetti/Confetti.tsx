import Lottie from "lottie-react";
import confetti from '../../assets/animacoes/confetti.json';

interface ConfettiProps {
    title?: string
    subtitle?: string
}

const Confetti = ({ title, subtitle }: ConfettiProps) => {

    return (
        <div className='ProdutoEspecifico__funil'>
        <div className='ProdutoEspecifico__funil--confetti'>
          <Lottie animationData={confetti} loop={true} />
          <Lottie animationData={confetti} loop={true} />
          <Lottie animationData={confetti} loop={true} />
          <Lottie animationData={confetti} loop={true} />
        </div>
        <div className='ProdutoEspecifico__funil--parabens Garantia--Blue'>
            {title}
          <div className='FunilParabens__subtitle Garantia__text Garantia--Blue'>
            {subtitle}
          </div>
        </div>
      </div>
    )
}

export default Confetti;