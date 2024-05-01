import GameHeader from './components/GameHeader';
import GameBoard from './components/GameBoard';
import GameMenu from './components/GameMenu';
import { useState, useEffect } from 'react';

const characters = ['Derek', 'Julia', 'Roger', 'Kevin', 'Alex', 'Bryan'];

function App() {
  const [gameState, setGameState] = useState('menu');
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardBank, setCardBank] = useState([]);

  const handleMenuClick = (e) => {
    const difficulty = e.target.textContent.toLowerCase();
    if (difficulty === 'easy') {
      setCardBank([...characters].slice(0, 1));
    } else if (difficulty === 'medium') {
      setCardBank([...characters].slice(0, 3));
    } else {
      setCardBank([...characters].slice(0, 6));
    }

    setGameState('playing');
  }

  const handleCardClick = (card) => {
    if (clickedCards.includes(card)) {
      setGameState('game over');
    } else {
      setClickedCards([...clickedCards, card]);
    }
  }

  useEffect(() => {
    if (cardBank.length !== 0 && clickedCards.length === cardBank.length) {
      setGameState('win');
    }
  }, [clickedCards])

  useEffect(() => {
    if (clickedCards.length > highScore) {
      setHighScore(clickedCards.length);
    }
  }, [clickedCards])

  if (gameState === 'menu') {
    return <GameMenu onClick={handleMenuClick}/>
  } else {
    return (
      <>
        <GameHeader gameState={gameState} currentScore={clickedCards.length} highScore={highScore}/>
        <GameBoard gameState={gameState} cards={cardBank} onClick={handleCardClick} />
      </>
    )
  }
}

export default App
