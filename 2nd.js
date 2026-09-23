const prompt = require("prompt-sync")();
let vehicle = prompt("Enter Your Vehicle(bike/car/bus): ");
let hour = Number(prompt("Enter Hours:"));
let charge = 0;

if (vehicle == "bike" ) {
    charge = 20 * hour;
}
else if (vehicle == "car" ) {
    charge = 40 * hour;
}
else if (vehicle == "bus" ) {
    charge = 80 * hour;
}
else {
    console.log("Invalid Vehicle Type!");


}
console.log("Your Charge is: ", charge);