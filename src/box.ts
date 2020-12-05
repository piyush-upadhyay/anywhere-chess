import { Color } from "./types";
import { getElementAtPosition } from "../utilities/viewHelper"
import { Position } from './types' 
import { Piece } from "./piece";
import { onBoxClick } from './index'

export class Box {

    color: Color
    
    position : Position;

    piece : Piece

    markAsSelected(){
        // console.log("clicked",this.position, this.piece.alias, this.piece.color)
        document.getElementById(this.getBoxIdByPosition(this.position)).style.backgroundColor = 'coral'
    }

    populate(piece:Piece){
        this.piece = piece
        getElementAtPosition(this.position).innerHTML = `<img class='piece-image' src='assets/pieces/${piece.getImage()}' >`
    }

    clear(){
        getElementAtPosition(this.position).innerHTML = "";
        document.getElementById(this.getBoxIdByPosition(this.position)).style.backgroundColor = ''
    }

    getBoxIdByPosition(position:Position){
        return position[0].toString()+position[1].toString()
    }

    constructor(color:Color, position:Position){
        this.color = color
        this.position = position

        document.getElementById(this.getBoxIdByPosition(position)).onclick = () => {
            // console.log("clicked",position, this.piece.alias, this.piece.color)
            onBoxClick(this.position)
        }
    }
}