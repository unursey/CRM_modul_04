"use strict";

const taxHard = function () {
    let yourProfit = +prompt("Введите Ваш доход");  
    let yourTax = 0;

    if (yourProfit > 50000) {
        yourTax = (yourProfit - 50000)*0.3;    
        yourProfit -= yourProfit - 50000;
    } 

    if (yourProfit > 15000 && yourProfit <= 50000) {
        yourTax = (yourProfit - 15000)*0.2 + yourTax;
        yourProfit -= yourProfit - 15000;
    }

    if (yourProfit <= 15000) {
        yourTax = yourProfit*0.13 + yourTax; 
    } 

    console.log(`Ваш налог: ${yourTax} рублей`);
};

taxHard();