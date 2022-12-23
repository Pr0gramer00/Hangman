import React from 'react'

const WrongLetters = ({wrongLetter}) => {
  return (
    <div className='wrong-letters-container'>
        <div >
          {wrongLetter.length > 0 && <p>Wrong</p>}
          {wrongLetter.map((letter, i) => <span key={i}>{`${letter} , `}</span>)}
            
        </div>

    </div>
  )
}

export default WrongLetters