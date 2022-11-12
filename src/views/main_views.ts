import { User } from "../models/User.ts";

export function main_page(): Response {
  
    return new Response("Hola mundo");
}


export function usuarios(): Response {
  const new_user: User = new User({
      Name: "Jhojan",
      LastName: "Toro",
      Age: 23,
      Email: "cualquieremail@gmail.com",
      Password: "123"
    });
  return new Response(new_user.getJSON());
}
