const prompt =require ("prompt-sync")();
let units=Number(prompt("Enter Electricity Units:"))
let bill=0;
if(units<=100){
    bill=units*5;
}
else if(units<=200){
    bill=units*7;

}
else{
    bill=units*10;
}
console.log("Your Bill is Here: ",bill);