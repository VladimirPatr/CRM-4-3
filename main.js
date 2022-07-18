'use strict';


// const productName = 'Acer Nitro 5';
// const quantitOfGoods = 420;
// const productСategory = 'laptop';
// const productPrice = 107400;

// console.log(productName);
// console.log(quantitOfGoods*productPrice);

const productName = prompt('Введите наименование товара', '');
const quantitOfGoods = Number(prompt('Введите количество товара', ''));
const productСategory = prompt('Введите категорию товара', '');
const productPrice = Number(prompt('Введите цену товара', ''));



if (isNaN(quantitOfGoods) || isNaN(productPrice)){
    console.log('Вы ввели некорректные данные');  
  } else {
    const totalSum = quantitOfGoods*productPrice;
    console.log(`Тип наименования:${typeof(productName)} Тип количества:${typeof(quantitOfGoods)}  Тип категории:${typeof(productСategory)} Тип цены:${typeof(productPrice)}`);
    console.log(`На складе ${quantitOfGoods} единиц товара "${productName}" на сумму ${totalSum} рублей`);
  }



// console.log(`Тип наименования:${typeof(productName)} Тип количества:${typeof(quantitOfGoods)}  Тип категории:${typeof(productСategory)} Тип цены:${typeof(productPrice)}`);
// console.log(`Number.isNaN(${quantitOfGoods}): `, Number.isNaN(quantitOfGoods));
// console.log(`Number.isNaN(${productPrice}): `, Number.isNaN(productPrice));
// console.log(`На складе ${quantitOfGoods} единиц товара "${productName}" на сумму ${totalSum} рублей`);
