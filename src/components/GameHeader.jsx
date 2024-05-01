function GameHeader({ gameState, currentScore, highScore }) {
  return (
    <>
      <h1>MEMORY GAME</h1>
      {gameState === 'win' && <h2>Congratulations! You won.</h2>}
      {gameState === 'game over' && <h2>Game Over.</h2>}
      <h3>Best Score: {highScore}</h3>
      <h3>Current Score: {currentScore}</h3>
    </>
  )
}

export default GameHeader;