import { Base } from "./models/Base.ts"
import { engine } from "./config.ts"

/**
 
Codigo para crear un servidor basico con 1 sola ruta usando deno js

import { serve } from "https://deno.land/std@0.161.0/http/server.ts";

const port = 8080;
const handler = (request: Request): Response => {
    return new Response("Hola mundo", {status: 200});
}

console.log("Server is running");
serve(handler, {port})
*/


function main() {

    const base = new Base();
    const json = base.getJSON();
    console.log(json);

}


main();