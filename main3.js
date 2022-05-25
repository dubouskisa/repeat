'use strict'

// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// let user = {};
// console.log(user);
// user.name = 'John';
// console.log(user);
// user.surname = 'Smith';
// user.name = 'Pete';
// console.log(user);
// delete user.name;
// console.log(user);




// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// };



// // У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// // Если объект salaries пуст, то результат должен быть 0.
// function sum(obj) {
//     let sm = 0
//     for (let key in obj) {
//         sm += obj[key]
//     }
//     return sm
// }
// console.log(sum(salaries));




// // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// // Например:
// // // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);
// // // после вызова функции
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };





// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };


// let calculator = {
//     read() { this.a = +prompt('A?', 0), this.b = +prompt('B?', 0) },
//     sum() { return this.a + this.b },
//     mul() { return this.a * this.b },
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//Сумма пользовательских чисел
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// let fig1 = prompt('num1?', 0),
//     fig2 = prompt('num2?', 0);
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(fig1, fig2));



// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
// function readNumber() {
//     let n
//     do {
//         n = +prompt('?',)
//     } while (!isFinite(n));
//     if (n == null) {
//         return null
//     } else {
//         return n
//     }
// }
// console.log(readNumber())



// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// Пример работы функции:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525
// let num1 = +prompt('1?'),
//     num2 = +prompt('2?');
// let num1 = 2,
//     num2 = 5;
// function random(min, max) {
//     return min + (Math.random() * (max - min))
// }
// console.log(random(num1, num2));