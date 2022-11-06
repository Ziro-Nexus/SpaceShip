import { Base } from "./models/Base.ts"
import {TestModel} from "./models/testModel.ts"

import { SERVER_PORT } from "./config.ts"
import { serve } from "https://deno.land/std@0.161.0/http/server.ts"



/**  Ejemplo de routing
const MAIN_ROUTE = new URLPattern({ pathname: "/main/" });
function handler(req: Request): Response {
  const match = MAIN_ROUTE.exec(req.url);
  if (match) {
    const base: abstractBase = new Base();
    return new Response(base.getJSON());
  }
  return new Response("Not found", {
    status: 404,
  });
}*/



function main() {

    // No se pueden crear instancias de una clase abstracta
    // se deberia crear una clase hija que herede de Base
   // const base: Base = new Base();
   // console.log(base.getJSON())

    const test = new TestModel();
    console.log(test.getJSON());



}


main();
