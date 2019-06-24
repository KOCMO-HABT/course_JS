'use strict';
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let a1 = prompt("Введите обязательную статью расходов в этом месяце");
let a2 = prompt("Во сколько обойдется?");

let appData = {
	money_2: money,
	timeData: time,
	expenses:{},
	optionalExpenses:{},
	income:[],
	savings:false
};

appData.expenses.a1 = a2;

alert("Бюджет на 1 день: " + appData.money_2/30);