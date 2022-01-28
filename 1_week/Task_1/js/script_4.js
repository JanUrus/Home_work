// Интернет-магазин занимается продажей различных сувениров и безделушек.
// Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, 
// запрашивающую у пользователя количество тех и других покупок,
// после чего выведите на экран общий вес посылки.

let souvenirWeight = 75 
let trinketWeight = 112

let souvener = Number(prompt("Quantity souvener? "));
let trinket = Number(prompt("Quantity trinket? "));

document.write((souvenirWeight * souvener) + (trinketWeight * trinket) + "kg" + " sum total");