
//Task01

const сonverterEuroToRub = price => (price*1.2*73).toFixed(2);

console.log(сonverterEuroToRub(20));


//Task02

const modifyStr = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

console.log(modifyStr("прИВЕт МиР КаК Дела"));


//Task03

const reverseStr = str => str.split("").reverse().join("");

console.log(reverseStr("Привет, как дела"));


//Task04

const calculate = (sum, count, promo) => {
    let rez = sum;

    if (count > 10) {
        rez *= 0.97;
    } 

    if (rez > 30000) {
        rez = 30000 + (rez - 30000)*0.85;
    } 

    if (promo === "METHED") {
        rez *= 0.9;
    } else 
    
    if (promo === "G3H2Z1" && rez > 2000) {
        rez -= 500;
    }

    return rez;
};

console.log(calculate(100000, 10, "G3H2Z1"));


//Task05

const del = (x, y) => {
	if (y > x) return del(y, x);
	if (y === 0) return x;
	return del(y, x % y);
};

console.log(del(20, 40));


//Task06

const min = (a, b) => {
    return a < b ? a : b;
};

console.log(min(45, 10));

