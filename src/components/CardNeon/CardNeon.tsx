interface CardNeonProps {
    text: string
    color: "Green" | "Purple" | "Orange" | "Blue"
}

function CardNeon({ text, color }: CardNeonProps) {
  return (
    <div className={`CardNeon CardNeon--${color}`}>
      <div className="CardNeon--header"></div>
      <div className="CardNeon--text">{text}</div>
      <div className="CardNeon--footer"></div>
    </div>
  );
}

export default CardNeon;
