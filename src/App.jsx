import GameHeader from './components/GameHeader';
import GameBoard from './components/GameBoard';
import GameMenu from './components/GameMenu';
import { useState, useEffect } from 'react';

const url = 'https://sephora.p.rapidapi.com/us/products/v2/list?categoryId=cat140006&pageSize=15&currentPage=1&sortBy=P_BEST_SELLING%3A1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
	}
};

function App() {
  const [gameState, setGameState] = useState('menu');
  const [difficulty, setDifficulty] = useState('easy');
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardBank, setCardBank] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const handleMenuClick = (e) => {
    setDifficulty(e.target.textContent.toLowerCase());
    setGameState('playing');
  }

  const handleCardClick = (card) => {
    if (clickedCards.includes(card)) {
      setGameState('game over');
    } else {
      setClickedCards([...clickedCards, card]);
    }
  }

  // Fetches data from Sephora API on App mount
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, {...options, signal})
      .then(response => response.json())
      .then(result => {
        const products = result.products.map(product => {
          const {displayName, heroImage} = product;
          return {productName: displayName, imageUrl: heroImage}
        });

        setFetchedData(products);
      });

    return () => {
      controller.abort();
    };
  }, [])

  // Updates the cardBank once difficulty is set and data is fetched
  useEffect(() => {
    if (difficulty === 'easy') {
      setCardBank([...fetchedData].slice(0, 5));
    } else if (difficulty === 'medium') {
      setCardBank([...fetchedData].slice(0, 10));
    } else {
      setCardBank([...fetchedData].slice(0, 15));
    }
  }, [difficulty, fetchedData])

  // Checks for win condition when a card is clicked
  useEffect(() => {
    if (cardBank.length !== 0 && clickedCards.length === cardBank.length) {
      setGameState('win');
    }
  }, [clickedCards])

  // Updates highscore when a card is clicked
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
