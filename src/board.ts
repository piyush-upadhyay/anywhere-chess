import { Box } from "./box"
import { BoardStates,Color,Players,Position } from "./types"
import { King } from "./pieces/king"
import { Queen } from "./pieces/queen"
import { Bishop } from "./pieces/bishop"
import { Knight } from './pieces/knight'
import { Rook } from "./pieces/rook"
import { Pawn } from './pieces/pawn'
import { Player } from "./player"

export class Board {
    occupiedPositions:any = []

    state: BoardStates = BoardStates.IDLE

    boxes:any = {}

    selectedBox:Box

    getBoxAtPosition(position:Position):Box{
        return this.boxes[(Number(position[0])-1).toString() + (Number(position[1])-1).toString()]
    }

    getPiecePosition(){
        return [1,1]
    }

    filterOccupiedPositions(){
        return [[1,1]]
    }

    initializeBoard(player1:Player, player2:Player){

        /* Player 1 */

        this.getBoxAtPosition([1,1]).populate(new Rook(player1.color))
        this.getBoxAtPosition([2,1]).populate(new Knight(player1.color))
        this.getBoxAtPosition([3,1]).populate(new Bishop(player1.color))
        this.getBoxAtPosition([4,1]).populate(new Queen(player1.color))
        this.getBoxAtPosition([5,1]).populate(new King(player1.color))
        this.getBoxAtPosition([6,1]).populate(new Bishop(player1.color))
        this.getBoxAtPosition([7,1]).populate(new Knight(player1.color))
        this.getBoxAtPosition([8,1]).populate(new Rook(player1.color))

        this.getBoxAtPosition([1,2]).populate(new Pawn(player1.color))
        this.getBoxAtPosition([2,2]).populate(new Pawn(player1.color))
        this.getBoxAtPosition([3,2]).populate(new Pawn(player1.color))
        this.getBoxAtPosition([4,2]).populate(new Pawn(player1.color))
        this.getBoxAtPosition([5,2]).populate(new Pawn(player1.color))
        this.getBoxAtPosition([6,2]).populate(new Pawn(player1.color))
        this.getBoxAtPosition([7,2]).populate(new Pawn(player1.color))
        this.getBoxAtPosition([8,2]).populate(new Pawn(player1.color))

        /* Player 2 */

        this.getBoxAtPosition([1,8]).populate(new Rook(player2.color))
        this.getBoxAtPosition([2,8]).populate(new Knight(player2.color))
        this.getBoxAtPosition([3,8]).populate(new Bishop(player2.color))
        this.getBoxAtPosition([4,8]).populate(new Queen(player2.color))
        this.getBoxAtPosition([5,8]).populate(new King(player2.color))
        this.getBoxAtPosition([6,8]).populate(new Bishop(player2.color))
        this.getBoxAtPosition([7,8]).populate(new Knight(player2.color))
        this.getBoxAtPosition([8,8]).populate(new Rook(player2.color))

        this.getBoxAtPosition([1,7]).populate(new Pawn(player2.color))
        this.getBoxAtPosition([2,7]).populate(new Pawn(player2.color))
        this.getBoxAtPosition([3,7]).populate(new Pawn(player2.color))
        this.getBoxAtPosition([4,7]).populate(new Pawn(player2.color))
        this.getBoxAtPosition([5,7]).populate(new Pawn(player2.color))
        this.getBoxAtPosition([6,7]).populate(new Pawn(player2.color))
        this.getBoxAtPosition([7,7]).populate(new Pawn(player2.color))
        this.getBoxAtPosition([8,7]).populate(new Pawn(player2.color))
    }

    selectPieceAtBox(box:Box){
       
        this.selectedBox = box
        this.selectedBox.markAsSelected()
        this.state = BoardStates.ACTION
    }

    dropPieceAtBox(box:Box){
        
        box.populate(this.selectedBox.piece)
        this.selectedBox.clear()
        this.state = BoardStates.IDLE

    }

    constructor(){
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                if((i+j)%2==0){
                    this.boxes[i+""+j] = new Box(Color.BLACK, [i+1,j+1])
                }else{
                    this.boxes[i+""+j] = new Box(Color.WHITE, [i+1, j+1])
                }
            }
        }
    }
}