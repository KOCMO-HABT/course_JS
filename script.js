'use strict';
let money = +prompt("Ваш бюджет на месяц?", ""), // + приобразует полученые значения из string в int
	time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
	budget: money,
	timeData: time,
	expenses:{},
	optionalExpenses:{},
	income:[],
	savings:false
};

//цикл for из видио урока 
for (let i = 0 ; i<2; i++){
	let a = prompt("Введите обязательную статью расходов в этом месяце"),
		b = prompt("Во сколько обойдется?");

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ){
		console.log("done");
		appData.expenses[a] = b;
	}
};

// переделаный цикл for 1 спообо
// let bool = false; 
// while (bool == false){ // пока bool лож, то выполняется цыкл

// 	let a = prompt("Введите обязательную статью расходов в этом месяце"),
// 		b = prompt("Во сколько обойдется?");

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ){
// 		console.log("done");
// 		appData.expenses[a] = b;
// 		bool = true; //если все выше пеерчисленые условия соблюдены то bool становится правдой и мы выходим их цыкла 
// 	} else{
// 		bool = false;// если хотябы одно из условий не соблюдено то цикл запускается повторно 
// 	}
// }

// переделаный цикл for  2 способ
// let bool = false;
// do{
// 	let a = prompt("Введите обязательную статью расходов в этом месяце"),
// 		b = prompt("Во сколько обойдется?");

// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ){
// 		console.log("done");
// 		appData.expenses[a] = b;
// 		bool = true;
// 	} else{
// 		bool = false;
// 	}
// }
// while(bool == false);

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay < 100){
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
	console.log("Высокий уровень достаткац");
} else{
	console.log("Произошла ошибка");
}

//Запись вложеных условий из видео урока через switch  (не работает, почему-то всегда выводит default)
// switch (appData.moneyPerDay){
// 	case appData.moneyPerDay < 100:
// 		console.log("Минимальный уровень достатка");
// 		break;
// 	case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
// 		console.log("Средний уровень достатка");
// 		break;
// 	case appData.moneyPerDay > 2000:
// 		console.log("Высокий уровень достаткац");
// 		break;
// 	default:
// 		console.log("Произошла ошибка");
// 		break;
// }