import React from 'react'
import GameState from './GameState'

export default function Reset({gameState , onReset}) {
  if(gameState === GameState.inProgress){
    return ;
  }

  return(
    ( <button onClick={onReset} className='mt-10 text-3xl font-semibold bg-purple-500 pr-5 pl-5 '> Reset </button>)
)
    

       
    
  
}
