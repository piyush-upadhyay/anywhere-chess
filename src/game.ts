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
        this.turn = this.turn == this.player1 ? this.player2 : this.player1
        document.getElementById("turn").innerHTML = this.turn.name
        
    }

    initializeTurn(player:Player){
        /* Assign turn first time during game initialization */
        this.turn = player
        document.getElementById("turn").innerHTML = this.turn.name
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