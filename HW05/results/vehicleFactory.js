function VehicleFactory(type) {
  switch (type) {
    case "Car":
      return {
        type: "Car",
        wheels: 2,
        engine: "V12",
      };
    case "Bike":
      return {
        type: "Bike",
        wheels: 1,
      };
    case "Truck":
      return {
        type: "Truck",
        wheels: 4,
        loadCapacity: "900kg",
      };
    default:
      throw new Error("Unknown vehicle type");
  }
}

const car = VehicleFactory("Car");
const bike = VehicleFactory("Bike");
const truck = VehicleFactory("Truck");

console.log(car);
console.log(bike);
console.log(truck);
