import { User } from "../models/User.ts";

export function main_page(): Response {
    const new_user: User = new User({
        Name: "asd",
        LastName: "asdd",
        Age: 23,
        Email: "aa",
        Password: "asd"
      });
    return new Response(new_user.getJSON());
}
