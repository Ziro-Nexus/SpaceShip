import {v1} from "https://deno.land/std@0.162.0/uuid/mod.ts"

interface IDate {
    day: number,
    month: number,
    year: number,
    ParseDate: () => string 
}

export class Base {

    private Id: string | number[]
    private ICeationDate: IDate
    private IModificationDate: IDate
    
    constructor() {
        this.Id = v1.generate();
        this.ICeationDate = this.CreateNewIDate();
        this.IModificationDate = this.ICeationDate;
    }

    private CreateNewIDate(): IDate {
        const date = new Date();
        const newDate = {
            day: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear(),
            ParseDate: function() {
                return `${this.day}-${this.month}-${this.year}`
            }
        }

        return newDate;
    }


    
    getICeationDate() {
        return this.ICeationDate;
    }

    getIModificationDate() {
        return this.ICeationDate;
    }

    getId() {
        return this.Id;
    }

}
