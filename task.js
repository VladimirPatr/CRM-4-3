'use strict';

const rain = Math.round(Math.random());
rain == 1 ? console.log('Пошёл дождь. Возьмите зонт!') : console.log('Дождя нет!');

const markMathematics = Number(prompt('Введите кол-во баллов по математике', ''));
const markRussian = Number(prompt('Введите кол-во баллов по русскому языку', ''));
const markInformatics = Number(prompt('Введите кол-во баллов по информатике', ''));

const sumMark = markMathematics + markRussian + markInformatics;
sumMark >= 265 ? console.log('Поздравляю, вы поступили на бюджет!') : console.log('Поздравляю, вы поступили на платное отделение!');


const moneyVladimir = Number(prompt('Введите сумму, которую Вы хотите снять', ''));
moneyVladimir%100 == 0 ? console.log('Подставляете ладони!') : console.log('Введите другую сумму кратную 100!');