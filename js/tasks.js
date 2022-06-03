"use strict";

const weatherForecast = function () {
    const rain = Math.round(Math.random());
    console.log(rain);

    if (rain === 1) {
        console.log("Пошёл дождь. Возьмите зонт!");  
    } else {
        console.log("Дождя нет!"); 
    }
};

weatherForecast();

const universityAdmission = function () {
    const mathBall = +prompt("Введите кол-во баллов по математике");
    const rusBall = +prompt("Введите кол-во баллов по русскому языку");
    const infBall = +prompt("Введите кол-во баллов по информатике");
    
    const res = mathBall+rusBall+infBall;

    if (res >= 265) {
        alert("Поздравляю, вы поступили на бюджет!"); 
        console.log("Поздравляю, вы поступили на бюджет!"); 
    } else if (res < 265) {
        alert("Поздравляю, вы НЕ поступили на бюджет!"); 
        console.log("Поздравляю, вы не поступили на бюджет!"); 
    } else {
        alert("Что-то пошло не так");
    }
};

universityAdmission();

const atm = function () {
    const money = +prompt("Владимир, сколько денег Вы хотите снять?");

    if (money % 100 === 0) {
        alert("Вот Ваши деньги"); 
    } else {
        alert("Минимальная сумма 100р"); 
        atm();
    } 

};

atm();