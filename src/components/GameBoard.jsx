import Card from './Card';
import '../styles/GameBoard.css'

const shuffle = (array) => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * len);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function GameBoard({ gameState, cards, onClick }) {
  shuffle(cards)

  return (
    <div class='game-board'>
      {cards.map(card => <Card gameState={gameState} card={card} onClick={onClick}/>)}
    </div>
  )
}

export default GameBoard;