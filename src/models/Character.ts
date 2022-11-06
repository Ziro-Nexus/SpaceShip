import {Base} from "./Base.ts"
import { ICharacters } from "../interfaces/ICharacter.ts";


export abstract class Character extends Base {

    protected abstract ModelName: string;
    protected attributes: ICharacters;
    

    constructor(characterAttributes: ICharacters) {
        super();
        this.attributes = characterAttributes;
    }

    override getJSON(): string {
        return JSON.stringify({
            ModelName: this.ModelName,
            Id: this.getId(),
            DateCreation: this.getCreationDate().ParseDate(),
            LastModification: this.getModificationDate().ParseDate(),
            Attributes: this.attributes
        });
    }

    override getObject(): { ModelName: string; Id: string | number[]; 
        DateCreation: string; LastModification: string; Attributes: ICharacters } {
    
        return {
            ModelName: this.ModelName,
            Id: this.getId(),
            DateCreation: this.getCreationDate().ParseDate(),
            LastModification: this.getModificationDate().ParseDate(),
            Attributes: this.attributes
        }
    }

    getPlayerName(): string {
        return this.attributes.CharacterName;
    }
}
