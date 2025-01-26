// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Create a constructor that accepts the properties of the Truck class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super(); // Call the constructor of the parent class, Vehicle
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const makeModel = vehicle.make && vehicle.model ? `${vehicle.make} ${vehicle.model}` : 'the vehicle';
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${makeModel} is being towed`);
    } else {
      console.log(`${makeModel} is too heavy to be towed`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails() {
    super.printDetails(); // Call the printDetails method of the parent class
    console.log(`VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity}, Wheels: ${this.wheels.length}`);
  }
}
export default Truck;