function GameMenu({ onClick }) {
  return (
    <>
      <h1>MEMORY GAME</h1>
      <button onClick={onClick}>Easy</button>
      <button onClick={onClick}>Medium</button>
      <button onClick={onClick}>Difficult</button>
    </>
  )
}

export default GameMenu;