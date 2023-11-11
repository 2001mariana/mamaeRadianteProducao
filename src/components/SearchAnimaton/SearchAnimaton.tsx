import Lottie from "lottie-react"
import animationSearch from '../../assets/animacoes/search.json'

function SearchAnimaton() {
    return <div className="SearchAnimaton">
              <Lottie animationData={animationSearch} loop={true} />
           </div>
}

export default SearchAnimaton