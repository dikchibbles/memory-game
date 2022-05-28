import './App.css';
import Card from './components/Card';
import React, {useEffect, useState} from 'react';
import randomCharacters from './helpers/characters';

function App() {
  const [score, setScore] = useState(0);
  const [guessed, setGuessed] = useState([]);
  const [best, setBest] = useState(0)

  function resetGame () {
    setGuessed([]);
    setScore(0);
  }

  function handleClick (character) {
    if (guessed.includes(character)) {
      resetGame()
      return;
    }
    setGuessed(guessed.concat(character));
    setScore(score + 1);
    if (score >= best) setBest(best + 1);
  }

  useEffect(() => {
    const storedBest = parseInt(localStorage.getItem('Best'));
    if (storedBest) setBest(storedBest);
  }, []);

  useEffect(() => {
    localStorage.setItem('Best', best)
  }, [best])

  useEffect(() => {
    if (score === 7) {
      resetGame();
      alert('You won! Thank you for playing!')
    }
  }, [score])

  return (
    <div className='container'>
      <div className='scoreboard'>
        <h2>Score: {score}</h2>
        <h2>Best: {best}</h2>
      </div>
      <div className='cards'>
        {randomCharacters().map((character) => <Card key={character.id} character={character} handleClick={handleClick}/>)}
      </div>
    </div>
  );
}

export default App;
