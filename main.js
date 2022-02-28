// 9. PROJECT: Race Day

let raceNumber = Math.floor(Math.random() * 1000);
const regPunc = true;
const age = 12;

// test by console logging raceNumber
// console.log(raceNumber);

if (age >= 18 && regPunc === true) {
    raceNumber = raceNumber + 1000;
}

// test by console logging raceNumber
// console.log(raceNumber);

if (age >= 18 && regPunc === true) {
    console.log(`The early bird gets the worm. 
    You will race at 9:30 am today. 
    Your race number is ${raceNumber}.`);
} else if (age >= 18 && regPunc === false) {
    console.log(`Good things come to those who wait. 
    You will race at 11:00 am today. 
    Your race number is ${raceNumber}.`);
}
if (age < 18) {
    console.log(`You will race at 12:30 pm today, young Padawan. 
    Your race number is ${raceNumber}.`);
}
