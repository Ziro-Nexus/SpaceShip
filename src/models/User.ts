import { Base } from "./Base.ts";
import { IUser } from "../interfaces/IUser.ts";

export class User extends Base {
    protected ModelName: string;

    Name: string;
    LastName: string;
    Age: number;
    Email: string;
    Password: string;


    constructor(attr: IUser) {
        super();
        this.Name = attr.Name;
        this.LastName = attr.LastName;
        this.Age = attr.Age;
        this.Email = attr.Email;
        this.Password = attr.Password;
        this.ModelName = this.constructor.name;
    }
}
