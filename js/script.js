"use strict";

const checkbox = document.querySelector(".add-product__checkbox");
const checkInput = document.querySelectorAll(".add-product__input")[3];

const productName = ['Хлеб', 'Майонез', 'Порошок стиральный', 'Пиво', 'Водка'];
const productCount = [2, 1, 1, 3, 1];
const productCategory = ['Продукты питания', 'Продукты питания', 'Бытовая химия', 'Алкоголь', 'Алкоголь'];
const productPrice = [76, 100, 360, 85, 200];

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    checkInput.disabled = false;
  } else {
    checkInput.disabled = true;
  }
});

let allSum = 0;

const productSum = productCount.forEach((e, i) => {
  console.log((productName[i]+':'), (productPrice[i]*e));
  allSum += (productPrice[i]*e);
});

console.log("Товары:", productName);
console.log("Общая сумма:", allSum);

