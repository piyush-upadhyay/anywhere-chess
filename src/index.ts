/* Main thread */

import { Mode, Position, BoardStates } from "./types"
import { Game } from "./game";

const game = new Game (Mode.OFFLINE, "Piyush", "Sujay")
game.initializeGame()

export const onBoxClick = function(position:Position){

    const clickedBox = game.board.getBoxAtPosition(position)

    
    // console.log(`Game state : \n
    // Box clicked : ${clickedBox.position}
    // Turn : ${game.turn.identifier}-${game.turn.name}\n
    // Board state : ${game.board.state}\n
    // Seleted Piece : ${clickedBox.piece.alias}`)

    if(game.board.state == BoardStates.IDLE && clickedBox.piece && clickedBox.piece.color == game.turn.color){

        /* Verify player turn
        verify that box has piece
        */

        game.board.selectPieceAtBox(clickedBox)
        
    }else if(game.board.state == BoardStates.ACTION && game.board.selectedBox){

        /* Verify that a piece is seleted for drop
        Verify allowed moving positions */

        game.board.dropPieceAtBox(clickedBox)
        game.changeTurn()
    }
}
