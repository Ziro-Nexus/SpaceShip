import { ISkills } from "./ISkills.ts";

export interface ICharacters {
    CharacterName: string;
    typeCharacter: string;
    Life: number;
    AttackPower: number;
    DefensePower: number;
    Speed: number;
    Skills: ISkills[];
}