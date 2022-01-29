// Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. 
// Скрипт должен обработать полученный номер и 
// показать на странице последние 4 цифры а остальные цифры карты должны заменены на *
//     Пример: "Номер вашей карты: **********1245"

let userCardNnumber =prompt(`Enter your card number?(16 digits)`)
let cardNumber = ("************ " + userCardNnumber.substring(12));
console.log("The last numbers of your card:"+cardNumber);
document.write("The last numbers of your card:"+cardNumber);

// substring возвращает часть строки