// Base.ts

//Base file contains the abstract class that will be used in all the other models

// importing uuid to use a crypto algorithm to generate a pseudo-random id
import {v1} from "https://deno.land/std@0.162.0/uuid/mod.ts"

// importing the interface for Date parsing
import { IDate } from "../interfaces/IDate.ts" // Shcema of the models


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
            Day: date.getDate(),
            Month: date.getMonth() + 1, // zero-indexing 
            Year: date.getFullYear(),
            Hours: date.getHours(),
            Minutes: date.getMinutes(),
            Seconds: date.getSeconds(),
            Milisec: date.getMilliseconds(),
            ParseDate: function() {
                const isoFormat = new Date(Date.UTC(
                    this.Year, this.Month - 1, this.Day, this.Hours, this.Minutes, this.Seconds, this.Milisec));
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
