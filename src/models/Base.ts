import {v1} from "https://deno.land/std@0.162.0/uuid/mod.ts"

interface IDate {
    day: number,
    month: number,
    year: number,
    hours: number,
    minutes: number,
    seconds: number,
    milisec: number
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
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            milisec: date.getMilliseconds(),
            ParseDate: function() {
                const isoFormat = new Date(Date.UTC(
                    this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milisec));
                return isoFormat.toISOString();
            }
        }
        return newDate;
    }

    getJSON() {
        return JSON.stringify({
            id: this.getId(),
            date_creation: this.getICeationDate().ParseDate(),
            last_modification: this.getIModificationDate().ParseDate(),
        });
    }

    getICeationDate() {
        return this.ICeationDate;
    }

    getIModificationDate() {
        return this.IModificationDate;
    }

    getId() {
        return this.Id;
    }

}
