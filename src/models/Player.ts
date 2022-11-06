import { Character } from "./Character.ts";
import { ICharacters } from "../interfaces/ICharacter.ts";

export class Player extends Character {

    protected ModelName: string;

    constructor(attr: ICharacters){
        super(attr);
        this.ModelName = this.constructor.name;
    }
}
