const readline = require('readline')




// console elog is a prebuilt funcition that prints a value to the console.
console.log('Hello World')
let firstName = 'Matt';
let age = '35';

console.log(firstName,age);

const isCool = true;

let powerLevel;
console.log(powerLevel)
// Numbers
let x = 4;
let favNum = 3;
console.log(favNum + x);    

// strings

let favRobot = 'Ultron ';
let favDino = 'T-rex';   

console.log(`${favRobot} would totally kill ${favDino}'s butt`);


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question("Enter a number to see if it's Adam's favorite",function(num){
    if (+num ===12) {
        console.log("That's Adam's favorite!")        
    } else {
        console.log("Thanks for playing")
    }
    });
