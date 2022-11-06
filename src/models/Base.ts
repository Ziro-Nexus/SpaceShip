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

export abstract class Base {

    protected Id: string | number[]
    protected CreationDate: IDate
    protected ModificationDate: IDate
    protected abstract ModelName: string
    
    constructor() {
        this.Id = v1.generate();
        this.CreationDate = this.CreateNewIDate();
        this.ModificationDate = this.CreationDate;
    }


    getModelName() {
        return this.ModelName;
    }

    private CreateNewIDate(): IDate {
        const date = new Date();
        const newDate = {
            day: date.getDate(),
            month: date.getMonth() + 1, // zero-indexing 
            year: date.getFullYear(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            milisec: date.getMilliseconds(),
            ParseDate: function() {
                const isoFormat = new Date(Date.UTC(
                    this.year, this.month - 1, this.day, this.hours, this.minutes, this.seconds, this.milisec));
                return isoFormat.toISOString();
            }
        }
        return newDate;
    }

    getJSON() {
        return JSON.stringify({
            model_name: this.ModelName,
            id: this.getId(),
            date_creation: this.getCreationDate().ParseDate(),
            last_modification: this.getModificationDate().ParseDate(),
        });
    }

    getCreationDate() {
        return this.CreationDate;
    }

    getModificationDate() {
        return this.ModificationDate;
    }

    getId() {
        return this.Id;
    }

}
