import GameHeader from './components/GameHeader';
import GameBoard from './components/GameBoard';
import { useState, useEffect } from 'react';

const characters = ['Derek', 'Julia', 'Roger', 'Kevin', 'Alex', 'Bryan'];

function App() {
  const [gameState, setGameState] = useState('playing');
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (card) => {
    if (clickedCards.includes(card)) {
      setGameState('game over');
    } else {
      setClickedCards([...clickedCards, card]);
    }
  }

  useEffect(() => {
    if (clickedCards.length === 3) {
      setGameState('win');
    }
  }, [clickedCards])

  useEffect(() => {
    if (clickedCards.length > highScore) {
      setHighScore(clickedCards.length);
    }
  }, [clickedCards])

  return (
    <>
      <GameHeader gameState={gameState} currentScore={clickedCards.length} highScore={highScore}/>
      <GameBoard gameState={gameState} characters={characters} onClick={handleClick} />
    </>
  )
}

export default App
