// import flyingCar class
import {FlyingCar} from './flyingcarmodule.js';

const myFlyingCar = new FlyingCar("BMW", 2027);
console.log(myFlyingCar.toString());
console.log(`Can this car fly? ${myFlyingCar.canFly ? "Yes" : "No"}`);