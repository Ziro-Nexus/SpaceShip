import {Base} from "./Base.ts"


export class TestModel extends Base {
    
    ModelName: string
    
    constructor() {
        super();
        this.ModelName = this.constructor.name;
    }
}
