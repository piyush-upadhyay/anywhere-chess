import { Color, Mode, Players } from "./types";
import { getElementAtPosition, assignPlayers } from "../utilities/viewHelper"
import { Player } from './player'
import { Board } from './board'

export class Game {

    mode: Mode

    player1: Player

    player2: Player

    turn: Player

    board: Board

    changeTurn(){
        
        /* Toggle turn */

        if(this.turn == this.player1){
            /* Change turn to player 2 */
            this.turn = this.player2
            document.getElementById("turnArrowPlayer1").innerHTML = '';
            document.getElementById("turnArrowPlayer2").innerHTML = `<img class="turn-arrow" src="assets/turnArrow.png">`
        }else{
            /* Change turn to player 1 */
            this.turn = this.player1
            document.getElementById("turnArrowPlayer2").innerHTML = '';
            document.getElementById("turnArrowPlayer1").innerHTML = `<img class="turn-arrow" src="assets/turnArrow.png">`
        }
    }

    initializeTurn(player:Player){
        /* Assign turn first time during game initialization */
        this.turn = player
        document.getElementById("turnArrowPlayer1").innerHTML = `<img class="turn-arrow" src="assets/turnArrow.png">`
    }

    initializeGame(){

        assignPlayers(this.player1.name, this.player2.name)

        this.board = new Board()

        this.board.initializeBoard(this.player1, this.player2)

        this.initializeTurn(this.player1)
    }

    constructor(mode:Mode, player1Name:string, player2Name:string){
        this.mode = mode;
        this.player1 = new Player(player1Name, Players.PLAYER1)
        this.player2 = new Player(player2Name, Players.PLAYER2)
    }
}