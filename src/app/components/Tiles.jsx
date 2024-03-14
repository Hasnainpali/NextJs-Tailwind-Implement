import React from 'react'

export default function Tiles({ values , onClick, playerTurn}) {
    
  return (
    <div onClick={onClick}className={`flex justify-center items-center text-3xl bg-slate-100 w-16 h-16 cursor-pointer ${
        values == null && playerTurn != null
          ? playerTurn.toLowerCase() === 'x'
            ? 'hover:after:content-["X"] hover:opacity-50'
            : 'hover:after:content-["O"] hover:opacity-50'
          : ''
      }`}>
      {values}
    </div>
  )
}
