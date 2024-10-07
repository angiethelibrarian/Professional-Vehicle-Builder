// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles //AM: I used a union operator using a Pipe |
const vehicles: (Car | Truck | Motorbike)[] = [];

// TODO: uncomment once trucks are implemented AM- i will copy paste so i do not confuse my work from provided code
// const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
const truck1 = new Truck(
  Cli.generateVin(),
  "red", 
  "Ford", 
  "F-150", 
  2021, 
  5000, 
  120, 
  [], 
  10000);

vehicles.push(truck1);
  //wrote vehicles.push(truck1); to add truck1 to array called vehicles push() method that adds to array

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")]; LEAVING AS COMMENT AND COPYPASTE BELOW
// const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels); LEAVING AS COMMENT AND COPYPASTE BELOW

const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(), 
  "black", 
  "Harley Davidson", 
  "Sportster", 
  2021, 
  500, 
  125, 
  motorbike1Wheels
);

vehicles.push(motorbike1);

// push vehicles to array
// TODO: uncomment once trucks are implemented
// vehicles.push(truck1); i wrote this above line 24
//vehicles.push(car1); i added this above to line 38
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1); i wrote this above line 55

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
