"use strict";

const checkbox = document.querySelector(".add-product__checkbox");
const checkInput = document.querySelectorAll(".add-product__input")[3];

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    checkInput.disabled = false;
  } else {
    checkInput.disabled = true;
  }
});



/*const productName = ['Хлеб', 'Майонез', 'Порошок стиральный', 'Пиво', 'Водка'];
const productCount = [2, 1, 1, 3, 1];
const productCategory = ['Продукты питания', 'Бытовая химия', 'Алкоголь'];
const productPrice = [76, 100, 360, 85, 200];
let allSum = 0;

const productSum = productCount.forEach((e, i) => {
  console.log((productName[i]+':'), (productPrice[i]*e));
  allSum += (productPrice[i]*e);
});

console.log("Товары:", productName);
console.log("Общая сумма:", allSum);*/


const productName = prompt("Наименование товара");
const productCount = +prompt("Количество товара");
const productCategory = prompt("Категория товара");
const productPrice = +prompt("Цена товара");

console.log(`Наименование товара: ${productName}`);
console.log(`Количество товара: ${productCount}`);
console.log(`Категория товара: ${productCategory}`);
console.log(`Цена товара: ${productPrice}`);

console.log(`Наименование товара: ${typeof productName}`);
console.log(`Количество товара: ${typeof productCount}`);
console.log(`Категория товара: ${typeof productCategory}`);
console.log(`Цена товара: ${typeof productPrice}`);

console.log(`На складе ${productCount} единицы товара "${productName}" на сумму ${productPrice*productCount} деревянных`);