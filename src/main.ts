
import { Character } from "./models/Character.ts"
import { ICharacters } from "./interfaces/ICharacter.ts";
import { ISkillsStates } from "./interfaces/ISkills.ts"
import { SERVER_PORT } from "./config.ts"
import { serve } from "https://deno.land/std@0.161.0/http/server.ts"



/**  Ejemplo de routing

}*/
const MAIN_ROUTE = new URLPattern({ pathname: "/main/" });
function handler(req: Request): Response {
  const match = MAIN_ROUTE.exec(req.url);

  let character: ICharacters[];

  if (match) {
    const attributesXiro: ICharacters = {
      CharacterName: "Xiro",
      typeCharacter: "Player",
      Life: 100,
      AttackPower: 20,
      DefensePower: 15,
      Speed: 3,
      Skills: [{HabilityName: "FireBall", Effects: {SkillState: ISkillsStates.DAMAGE_ENEMY, value: 50}}]
     };

     const attributesSef: ICharacters = {
      CharacterName: "Sef",
      typeCharacter: "Enemy",
      Life: 90,
      AttackPower: 25,
      DefensePower: 20,
      Speed: 3,
      Skills: [{HabilityName: "Berserker", Effects: {SkillState: ISkillsStates.BOOST_ATTACK, value: 10}}]
     };

     const attributesJhohan: ICharacters = {
      CharacterName: "Jhohan",
      typeCharacter: "NPC",
      Life: 120,
      AttackPower: 15,
      DefensePower: 30,
      Speed: 3,
      Skills: [{HabilityName: "Shield", Effects: {SkillState: ISkillsStates.BOOST_DEFENSE, value: 30}}]
     };
  
     const characterXiro: Character = new Character(attributesXiro);
     const characterSef: Character = new Character(attributesSef);
     const characterJhohan: Character = new Character(attributesJhohan);

     const data = [
      {
        [`${characterXiro.getPlayerName()}-${characterXiro.getId()}`]: characterXiro.getObject(),
        [`${characterSef.getPlayerName()}-${characterSef.getId()}`]: characterSef.getObject(),
        [`${characterJhohan.getPlayerName()}-${characterJhohan.getId()}`]: characterJhohan.getObject()
      }
     ]
      
    return new Response(JSON.stringify(data));
  }
  return new Response("Not found", {
    status: 404,
  })}


function main(){
  serve(handler, {port:SERVER_PORT});
}


main();
