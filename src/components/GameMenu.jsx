import '../styles/GameMenu.css';

function GameMenu({ onClick }) {
  return (
    <div className='game-menu'>
      <h1>MEMORY GAME</h1>
      <div className="button-wrapper">
        <button onClick={onClick}>Easy</button>
        <button onClick={onClick}>Medium</button>
        <button onClick={onClick}>Hard</button>
      </div>
    </div>
  )
}

export default GameMenu;