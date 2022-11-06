// Base.ts

//Base file contains the abstract class that will be used in all the other models

// importing uuid to use a crypto algorithm to generate a pseudo-random id
import {v1} from "https://deno.land/std@0.162.0/uuid/mod.ts"

// importing the interface for Date parsing
import { IDate } from "../interfaces/IModels.ts"


/**
 * Base - Father class of all models used in SpaceShip proyect
 * @Id: generated pseudo-random id
 * @CreationDate: the creation date of the object
 * @ModificationDate: the modification date of the object
 * @ 
 */
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
            ModelName: this.ModelName,
            Id: this.getId(),
            DateCreation: this.getCreationDate().ParseDate(),
            LastModification: this.getModificationDate().ParseDate(),
        });
    }

    getObject() {
        return {
            ModelName: this.ModelName,
            Id: this.getId(),
            DateCreation: this.getCreationDate().ParseDate(),
            LastModification: this.getModificationDate().ParseDate(),
        }
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
