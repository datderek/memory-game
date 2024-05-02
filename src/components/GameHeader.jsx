import '../styles/GameHeader.css';

function GameHeader({ gameState, currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <h1>MEMORY GAME</h1>
      {gameState === 'win' && <h2>Congratulations! You won.</h2>}
      {gameState === 'game over' && <h2>Game Over.</h2>}
      <div className="score-container">
        <h3>Best Score: {highScore}</h3>
        <h3>Current Score: {currentScore}</h3>
      </div>
    </div>
  )
}

export default GameHeader;