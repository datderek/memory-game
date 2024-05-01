import GameHeader from './components/GameHeader';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

const characters = ['Derek', 'Julia', 'Roger', 'Kevin', 'Alex', 'Bryan'];

function App() {
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (card) => {
    setClickedCards([...clickedCards, card]);
  }

  return (
    <>
      <GameHeader/>
      <GameBoard characters={characters} onClick={handleClick}/>
    </>
  )
}

export default App
