// impModels.ts

// Typescript file that contains all the interfaces used for the models


/**
 * IDate: Interface for Date parsing
 * @day: number of the day
 * @month: number of the month
 * @year: number of the year
 * @hours: number of the hours
 * @minutes: number of the minutes
 * @seconds: number of the seconds
 * @milisec: number of the milisecons
 * @ParseDate: function that parse the object into a valid Date with ISO format
 */
export interface IDate {
    Day: number,
    Month: number,
    Year: number,
    Hours: number,
    Minutes: number,
    Seconds: number,
    Milisec: number
    ParseDate: () => string 
}
