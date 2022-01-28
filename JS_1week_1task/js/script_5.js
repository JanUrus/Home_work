// Создайте программу, которая запрашивает у пользователя два целых числа a и b, 
// после чего выводит на экран результаты следующих математических операций: 

let j = Number(prompt("Your first number?"));
let u = Number(prompt("your second number?"));

document.write("Сумма: " + (j+u));

document.write("Разница: " + (j-u));

document.write("Произведение: " + (j*u));

document.write("Частное от деления: " + (j/u));

document.write("Остаток от деления: " + (j%u));

document.write("Результат возведения числа: " + (j**u));
