const shuffle = (array) => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * len);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function GameBoard( { characters }) {
  shuffle(characters)

  return (
    <>
      {characters.map(character => <div>{character}</div>)}
    </>
  )
}

export default GameBoard;