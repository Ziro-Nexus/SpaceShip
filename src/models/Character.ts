import {Base} from "./Base.ts"
import { ICharacters } from "../interfaces/ICharacter.ts";


export class Character extends Base {

    protected ModelName: string;
    protected attributes: ICharacters;
    

    constructor(characterAttributes: ICharacters) {
        super();
        this.ModelName = this.constructor.name;
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

    override getObject() {
        return {
            ModelName: this.ModelName,
            Id: this.getId(),
            DateCreation: this.getCreationDate().ParseDate(),
            LastModification: this.getModificationDate().ParseDate(),
            Attributes: this.attributes
        }
    }

    getPlayerName() {
        return this.attributes.CharacterName;
    }
}
