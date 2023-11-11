import Confetti from "../Confetti";

interface ConfettiDisplayProps {
    shouldShowConfetti: boolean
    title?: string
    subtitle?: string
}

const ConfettiDisplay = ({ shouldShowConfetti, title, subtitle }: ConfettiDisplayProps) => {
    return shouldShowConfetti ? <Confetti title={title} subtitle={subtitle} /> : null
}

export default ConfettiDisplay;