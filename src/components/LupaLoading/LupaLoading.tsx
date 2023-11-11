import Lottie from "lottie-react"
import animation from '../../assets/animacoes/cegonha.json'

function LupaLoading() {
    return <div className="LupaLoading">
            <Lottie animationData={animation} loop={true} />
        </div>
}

export default LupaLoading