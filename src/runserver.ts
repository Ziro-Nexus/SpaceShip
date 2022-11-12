import { Routes } from "./router/router.ts"; // Getting the router to handle views
import { SERVER_PORT } from "./config.ts"
import { serve } from "https://deno.land/std@0.161.0/http/server.ts"


function handler(req: Request): Response {

  for (const route of Routes) {

    const match = route.Pattern.exec(req.url);

    if (match && route.Methods.find(m => m === req.method)) {
      return route.View();
    }

  }

  return new Response(`${req.url}: Not valid in this context`, {
    status: 404,
  })}


function main(){
  serve(handler, {port:SERVER_PORT});
}

main();
