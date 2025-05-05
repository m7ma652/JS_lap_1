// import class car
import { Car } from './carmodule.js';
export class FlyingCar extends Car {
    constructor(model, year) {
        super(model, year);
        this.canFly = true;
    }
    toString() {
        return `${super.toString()}, i can fly`;
    }
}