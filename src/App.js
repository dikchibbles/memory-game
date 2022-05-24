import './App.css';
import Card from './components/Card';
import React, {useState} from 'react';
import Hinata from './images/Hinata.jpeg';
import Sasuke from './images/Sasuke.webp';
import Naruto from './images/Naruto.jpeg';
import Sakura from './images/Sakura.webp';
import Itachi from './images/Itachi.webp';
import Madara from './images/Madara.webp';
import Gaara from './images/Gaara.jpeg';

function App() {
  const [names, setNames] = useState([['Naruto', Naruto], ['Sasuke', Sasuke], ['Hinata', Hinata], ['Sakura', Sakura], ['Itachi', Itachi], ['Madara', Madara], ['Gaara', Gaara]]) 
  const [score, setScore] = useState(0)

  function repositionCards () {
    let newCards = [...shuffle(names)]
    setNames(newCards)
  }

  function increaseScore () {
    setScore(score + 1);
    console.log(`score increased to ${score}`);
  }

  function youLose () {
    setScore(0)
  }

  return (
    <div className='container'>
      <div className='scoreboard'>
        <h2>Score: {score}</h2>
      </div>
      <div className='cards'>
        {names.map((el, i) => {
          return <Card number={i} title={el[0]} imgUrl={el[1]} reposition={repositionCards} increaseScore={increaseScore} youLose={youLose}/>
        })}
      </div>
    </div>
  );
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default App;
