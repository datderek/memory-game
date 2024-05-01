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
    <>
      {cards.map(card => <div onClick={gameState === 'playing' && (() => onClick(card))}>{card.productName}</div>)}
    </>
  )
}

export default GameBoard;