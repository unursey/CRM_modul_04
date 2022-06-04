"use strict";

const tax = function () {
    let yourProfit = +prompt("Введите Ваш доход");
    let yourTax;

    if (yourProfit > 50000) {
        yourTax = yourProfit/100*30;  
        console.log(`Ваш налог: ${yourTax} рублей`);

    } else if (yourProfit > 15000) {
        yourTax = yourProfit/100*20; 
        console.log(`Ваш налог: ${yourTax} рублей`);

    } else if (yourProfit >= 0) {
        yourTax = yourProfit/100*13; 
        console.log(`Ваш налог: ${yourTax} рублей`);

    } else {
        console.log(`Данные введены не верно`);
    }
};

tax();