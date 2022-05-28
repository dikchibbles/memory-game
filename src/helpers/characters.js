import uniqid from 'uniqid'

const characters = [
    {id: uniqid(), name: 'Naruto', img: require('../images/Naruto.jpeg')},
    {id: uniqid(), name: 'Gaara', img: require('../images/Gaara.jpeg')},
    {id: uniqid(), name: 'Sasuke', img: require('../images/Sasuke.webp')},
    {id: uniqid(), name: 'Madara', img: require('../images/Madara.webp')},
    {id: uniqid(), name: 'Sakura', img: require('../images/Sakura.webp')},
    {id: uniqid(), name: 'Hinata', img: require('../images/Hinata.jpeg')},
    {id: uniqid(), name: 'Itachi', img: require('../images/Itachi.webp')},
]

const randomCharacters = () => {
    let shuffledArray = [...characters]
    let currentIndex = shuffledArray.length, randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
    
    return shuffledArray;
}

export default randomCharacters







