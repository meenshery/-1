document.addEventListener("DOMContentLoaded", function () {
    // задание 1

    let age = prompt('сколько вам лет??')
    let message 
    if (age < 65) {
        message = ('вам ещё рано на пенсию')
    }
    if (age >= 65) {
        message = ('поздравляем с пенсионным возрастом!!')
    }
    else {
        message = ('упс! что-то не так')
    }
    alert (message)

    // задание 2
    let agemessage
    let a = prompt('введите первое число')
    let b = prompt('введите второе число')
    if (a < b) {
        agemessage = ('второе число больше')
    }
    else if (a > b) {
        agemessage = ('первое число больше')
    }
    else if (a===b) {
        agemessage = ('числа равны')
    }
    alert (agemessage)

    // задание 3

    let x = prompt('введите число')
    let nummessage
    if (x%2 === 0) {
        nummessage = ('число чётное')
    }
    else {
        nummessage = ('число нечётное')
    }
    alert (nummessage)

    // задание 4

    const secretnum = 5
    let guess 
    let y = prompt ('угадайте число')
    if (y == secretnum) {
        guess = ('вы угадали! ура!!')
    }
    else {
        guess = ('вы не угадали :(')
    }
    alert (guess)


    // задание 5

    let login = prompt('введите логин')
    let password = prompt('введите пароль')
    let hello
    if (login == 'admin' && password == '12345') {
        hello = ('добро пожаловать!!')
    }
    else {
        hello = ('неверный логин или пароль')
    }
    alert (hello)


    // задание 6

    let year = prompt ('введите любой год')
    let yearmessage 
    if (year%4 == 0 && year%100 != 0 || year%400 == 0) {
        yearmessage = ('класс! это високосный год')
    }
    else {
        yearmessage = ('нет, это не високосный год')
    }
    alert (yearmessage)

    // задание 7

    let n = prompt ('введите число, пожалуйста')
    let answer 
    if (n > 100) {
        answer = ('это большое число!')
    }
    else if (n < 100) {
        answer = ('это маленькое число')
    }
    else if (n == 100) {
        answer = ('точно 100!')
    }
        else {
            answer = ('упс! что-то не так')
        }
    alert (answer)
 })