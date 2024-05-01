const shuffle = (array) => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * len);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function GameBoard({ characters, onClick }) {
  shuffle(characters)

  return (
    <>
      {characters.map(character => <div onClick={() => onClick(character)}>{character}</div>)}
    </>
  )
}

export default GameBoard;