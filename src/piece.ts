import { Color } from "./types";
import { ColorSuffix } from "./types";

export abstract class Piece {
    
    constructor(color:Color){
        this.color = color
    }
    
    color:Color;

    alias:string;

    getImage(){
        return ColorSuffix[this.color] + this.alias + ".webp"
    }
}