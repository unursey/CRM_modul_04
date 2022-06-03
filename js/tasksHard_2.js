"use strict";

const taxHard = function () {
    let yourProfit = +prompt("Введите Ваш доход");  
    let yourTax;

    if (yourProfit <= 15000) {
        yourTax = yourProfit*0.13; 
        console.log(`Ваш налог: ${yourTax} рублей`);

    } else if (yourProfit > 15000 && yourProfit <= 50000) {
        yourTax = 15000*0.13 + (yourProfit - 15000)*0.2; 
        console.log(`Ваш налог: ${yourTax} рублей`);

    } else if (yourProfit > 50000) {
        yourTax = 15000*0.13 + 35000*0.2 + (yourProfit - 50000)*0.3;  
        console.log(`Ваш налог: ${yourTax} рублей`);
        
    } else {
        console.log(`Данные введены не верно`);
    }
};

taxHard();