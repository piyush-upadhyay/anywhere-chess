import { Color, PlayerColor, Players } from "./types";

export class Player {

    name: string

    identifier:Players

    color: Color

    constructor(name:string, playerIndetifier:Players){
        this.identifier = playerIndetifier
        this.name = name
        if(playerIndetifier == Players.PLAYER1){
            this.color = Color.WHITE
        }else{
            this.color = Color.BLACK
        }
    }
}