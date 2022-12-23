import React from 'react'

const Word = ({selectedWord, correctLetter}) => {
  return (
    <div className='word' id="word">
      {selectedWord.split('').map((letter,index) => {
        return (
          <span className='letter ' key={index}>
            {correctLetter.includes(letter) ? letter : ''}
          </span>
        )
      })}

    </div>
  )
}

export default Word