"use strict";

const myWeight = 54;
const speedLight = 3e8;

const myEnergy = myWeight*(speedLight**2);

const myEnergyTwo = myEnergy.toExponential(3);

//console.log(`E = ${myEnergy} Дж`);
//console.log(`E = ${myEnergyTwo} Дж`);
//console.log(`E = ${typeof myEnergy} Дж`);