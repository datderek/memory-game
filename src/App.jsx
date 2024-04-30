import GameHeader from './components/GameHeader';
import GameBoard from './components/GameBoard';

const characters = ['Derek', 'Julia', 'Roger', 'Kevin', 'Alex', 'Bryan'];

function App() {
  return (
    <>
      <GameHeader/>
      <GameBoard characters={characters}/>
    </>
  )
}

export default App
