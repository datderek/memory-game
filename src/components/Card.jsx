import '../styles/Card.css';

function Card({ gameState, card, onClick }) {
  return (
    <div className='card' onClick={gameState === 'playing' && (() => onClick(card))}>
      <img className='card-image' src={card.imageUrl} alt=''></img>
      <div className='card-title'>{card.productName}</div>
    </div>
  )
}

export default Card;