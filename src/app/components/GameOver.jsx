import GameState from "./GameState"

export default function GameOver({gameState}) {
   switch(gameState){
     case GameState.inProgress:
      return <></>
        case GameState.playerOWins:
          return <div className="mt-4 text-3xl font-semibold border-4 w-full max-w-48 text-center"> O wins </div>
          case GameState.playerXWins:
            return <div className="mt-4 text-3xl font-semibold border-4 w-full max-w-48 text-center"> X wins </div>
            case GameState.draw:
              return <div className="mt-4 text-3xl font-semibold border-4 w-full max-w-48 text-center"> Draw </div>
   }
}

