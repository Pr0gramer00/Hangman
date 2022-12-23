import React, { useEffect } from 'react'
import { checkWin } from './Helpers';

const Popup = ({correctLetter, wrongLetter, selectedWord, setPlayable,playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealed = '';
  let playable = true;

  if (checkWin(correctLetter, wrongLetter, selectedWord) === 'win'){
    finalMessage = 'Congratulations! You won';
    playable = false;
  }else if (checkWin(correctLetter, wrongLetter, selectedWord) === 'lose'){
    finalMessage = 'Unfortunately! You lost';
    finalMessageRevealed = `..the word was ${selectedWord}`
    playable = false;
  }
  useEffect(() => setPlayable(playable));
  return (
    <div className='popup-container' id="popup-container">
    <div className="popup">
        <h2 >{finalMessage}</h2>
        <h3 >{finalMessageRevealed}</h3>
        <button onClick={playAgain}>
            Play Again
        </button>
    </div>
    
    </div>
  )
}

export default Popup