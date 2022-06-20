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




// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// function ucFirst(str) {
//     str = str[0].toUpperCase() + str.slice(1);
//     console.log(str);
// }

// console.log(ucFirst("вася") == "Вася");


// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

// function checkSpam(params) {
//     return params.toLowerCase().includes('viagra') || params.toUpperCase().includes('XXX');
// }
// console.log(checkSpam('buy ViAgRA now'),
//     checkSpam('free xxxxx'),
//     checkSpam("innocent rabbit")
// );




// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"



// function truncate(str, l) {
//     if (str.length < l) {
//         return str
//     }
//     return (str.slice(0, l - 1) + '...')
// }
// или

// function truncate(str, l) {
//     return (str.length > l) ? str.slice(0, l - 1) + '...' : str;
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));


// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true

// function extractCurrencyValue(str) {
//     let result = 1
//     for (let key of str) {
//         typeof key !== 'number' || (result += key);
//     }
//     return
// }

// console.log(extractCurrencyValue($120));






// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// let styles = ['Джаз', 'Блюз',];
// console.log(styles);
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles[1] = 'Классика';
// console.log(styles);
// console.log('удалено и возвращено ' + styles.shift());
// console.log(styles);
// styles.unshift('Рэп', 'Рэгги');
// console.log(styles);



// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     let arr = [];
//     while (true) {
//         let num = prompt('number');
//         if (num === '' || num === null || !isFinite(num)) break;
//         arr.push(+num);
//     }
//     let sum = 0;
//     for (const number of arr) {
//         sum += number;
//     }
//     return sum;
// }
// let b = sumInput();
// console.log(b);




// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.



// function camelize(txt) {
//     return txt.split('-').map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));




// // Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// // Функция должна возвращать новый массив и не изменять исходный.
// // Например:
// let arg1 = 1,
//     arg2 = 4,
//     arr = [5, 3, 8, 1];
// // let filtered = filterRange(arr, 1, 4);
// // alert( filtered ); // 3,1 (совпадающие значения)
// // alert( arr ); // 5,3,8,1 (без изменений)

// function filterRange(arr, a, b) {
//     return arr.filter(item => item >= a && item < b);
// }
// console.log(arr);
// console.log(filterRange(arr, arg1, arg2));






// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// filterRangeInPlace(arr, arg1, arg2);
// console.log(arr);






// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// // ... ваш код для сортировки по убыванию
// alert( arr ); // 8, 5, 2, 1, -10

// let arr = [5, 2, 1, -10, 8];
// function compareNumeric(a, b) {
//     if (a > b) return -1;
//     if (a == b) return 0;
//     if (a < b) return 1;
// };
// arr = arr.sort(compareNumeric)
// console.log(arr);  // 8, 5, 2, 1, -10




// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// function copySorted(arr) {
//     return arr.slice().sort();
// }
// console.log(arr);
// console.log(sorted);



// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.


let calc = new Calculator;
alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert(result); // 8

