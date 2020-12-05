import { Position } from '../src/types'

export const getElementAtPosition = function (position:Position){
    return document.getElementById(position[0] + "" + position[1])
}

export const assignPlayers = function(player1Name:string, player2Name:string){
    document.getElementById("p1").innerHTML = player1Name
    document.getElementById("p2").innerHTML = player2Name
}