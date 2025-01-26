// // Importing classes from other files
// import inquirer from "inquirer";
// import Truck from "./Truck.js";
// import Car from "./Car.js";
// import Motorbike from "./Motorbike.js";

// // Define the Cli class
// class Cli {
//   startCli() {
//     throw new Error("Method not implemented.");
//   }
//   // Updated vehicles property to accept Truck and Motorbike objects as well
//   vehicles: (Car | Truck | Motorbike)[];
//   selectedVehicleVin: string | undefined;
//   exit: boolean = false;

//   // Updated the constructor to accept Truck and Motorbike objects as well
//   constructor(vehicles: (Car | Truck | Motorbike)[]) {
//     this.vehicles = vehicles;
//   }

//   // Static method to generate a vin
//   static generateVin(): string {
//     return (
//       Math.random().toString(36).substring(2, 15) +
//       Math.random().toString(36).substring(2, 15)
//     );
//   }

//   // Method to choose a vehicle from existing vehicles
//   chooseVehicle(): void {
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           name: "selectedVehicleVin",
//           message: "Select a vehicle to perform an action on",
//           choices: this.vehicles.map((vehicle) => {
//             return {
//               name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
//               value: vehicle.vin,
//             };
//           }),
//         },
//       ])
//       .then((answers) => {
//         this.selectedVehicleVin = answers.selectedVehicleVin;
//         this.performActions();
//       });
//   }
//   performActions() {
//     throw new Error("Method not implemented.");
//   }

//   // Method to create a new vehicle
//   createVehicle(): void {
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           name: "vehicleType",
//           message: "Select a vehicle type",
//           choices: ["Car", "Truck", "Motorbike"],
//         },
//       ])
//       .then((answers) => {
//         if (answers.vehicleType === "Car") {
//           this.createCar();
//         } else if (answers.vehicleType === "Truck") {
//           this.createTruck();
//         } else if (answers.vehicleType === "Motorbike") {
//           this.createMotorbike();
//         }
//       });
//   }
//   createMotorbike() {
//     throw new Error("Method not implemented.");
//   }

//   // Method to create a car
//   createCar(): void {
//     inquirer
//       .prompt([
//         { type: "input", name: "color", message: "Enter Color" },
//         { type: "input", name: "make", message: "Enter Make" },
//         { type: "input", name: "model", message: "Enter Model" },
//         { type: "input", name: "year", message: "Enter Year" },
//         { type: "input", name: "weight", message: "Enter Weight" },
//         { type: "input", name: "topSpeed", message: "Enter Top Speed" },
//       ])
//       .then((answers) => {
//         const car = new Car(
//           Cli.generateVin(),
//           answers.color,
//           answers.make,
//           answers.model,
//           parseInt(answers.year),
//           parseInt(answers.weight),
//           parseInt(answers.topSpeed),
//           []
//         );
//         this.vehicles.push(car);
//         this.selectedVehicleVin = car.vin;
//         this.performActions();
//       });
//   }

//   // Method to create a truck
//   createTruck(): void {
//     inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'color',
//           message: 'Enter Color',
//         },
//         {
//           type: 'input',
//           name: 'make',
//           message: 'Enter Make',
//         },
//         {
//           type: 'input',
//           name: 'model',
//           message: 'Enter Model',
//         },
//         {
//           type: 'input',
//           name: 'year',
//           message: 'Enter Year',
//         },
//         {
//           type: 'input',
//           name: 'weight',
//           message: 'Enter Weight',
//         },
//         {
//           type: 'input',
//           name: 'topSpeed',
//           message: 'Enter Top Speed',
//         },
//         {
//           type: 'input',
//           name: 'towingCapacity',
//           message: 'Enter Towing Capacity',
//         },
//       ])
//       .then((answers) => {
//         const vin = Cli.generateVin();
//         const vehicle = new Truck(
//           vin,
//           answers.color,
//           answers.make,
//           answers.model,
//           parseInt(answers.year),
//           parseInt(answers.weight),
//           parseInt(answers.topSpeed),
//           [],
//           parseInt(answers.towingCapacity)
//         );
//         this.vehicles.push(vehicle);
//         this.selectedVehicleVin = vehicle.vin;
//         this.performActions();
//       });
//     }}
//   export default Cli;
// export default Cli;
// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck(); 
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike();
        }
      });
  }

  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        let vehicle: Car | Truck | Motorbike;
        const vin = Cli.generateVin();
        vehicle = new Car(
          vin,
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        this.vehicles.push(vehicle);
        this.selectedVehicleVin = vehicle.vin;
        this.performActions();
      });
  }

  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        const vin = Cli.generateVin();
        const vehicle = new Truck(
          vin,
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );
        this.vehicles.push(vehicle);
        this.selectedVehicleVin = vehicle.vin;
        this.performActions();
      });
  }

  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        const vin = Cli.generateVin();
        const wheels = [
          new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
        ];
        const vehicle = new Motorbike(
          vin,
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels,

        );
        this.vehicles.push(vehicle);
        this.selectedVehicleVin = vehicle.vin;
        this.performActions();
      });
  }
// add parameter to accpet truck object
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        const vehicle = answers.vehicleToTow;
        console.log(`Towing vehicle: ${vehicle.make} ${vehicle.model} (VIN: ${vehicle.vin}, Weight: ${vehicle.weight})`);
        this.towVehicle(vehicle);
          })
          .catch((error) => {
            console.error('Error selecting vehicle to tow:', error);
          });
      }
    
      towVehicle(vehicle: Car | Truck | Motorbike): void {
        console.log(`Vehicle with VIN ${vehicle.vin} and weight ${vehicle.weight} kg is being towed.`);
        // Add towing logic here
      } 
      

// add else if statement to run wheelie method and tow method
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow',
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        } else if (answers.action === 'Tow') {
          // find the selected vehicle and tow it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              // call the findVehicleToTow method to find a vehicle to tow
              if (this.vehicles[i] instanceof Truck) {
                this.findVehicleToTow(this.vehicles[i] as Truck);
                return;
              } else {
                console.log('Only trucks can tow vehicles.');
              }
            }
          }
        } else if (answers.action === 'Wheelie') { 
          // find the selected vehicle and perform a wheelie
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              // call the wheelie method to perform a wheelie
              if (this.vehicles[i] instanceof Motorbike) {
                (this.vehicles[i] as Motorbike).wheelie();
              } else {
                console.log('Only motorbikes can perform a wheelie.');
              }
            }
          }
        }
// filter array or find array method 
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
