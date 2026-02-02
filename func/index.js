// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(price, sell, nalog) {
    const discount = price * (sell / 100)
    const finalDiscount = price - discount
    const tax = finalDiscount * (nalog / 100)
    const finalPrice = finalDiscount + tax
    return finalPrice
}

console.log(calculateFinalPrice(100, 10, 20));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(userName, UserPass){
    if(userName === "admin" && UserPass === "123456"){
        return "Доступ разрешен"
}
else{
    return "Доступ запрещен"
}
}

checkAccess("admin", "123456")
console.log(checkAccess("admin", "123456"))
console.log(checkAccess("user", "123456"))
console.log(checkAccess("admin", "123456"))
console.log(checkAccess("admin", "123456"))

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.


function getTimeOfDay(time){
    if (time < 0 || time > 23){
        return "Некорректное время"
    } 
    else if (time <= 5){
        return "Сейчас Ночь"
    }
    else if (time <= 11){
        return "Сейчас Утро"
    }
    else if (time <= 17){
        return "Сейчас День"
    }
    else {
        return "Сейчас Вечер"
    }
}

 console.log(getTimeOfDay(12));

 // Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

function findFirstEven(start,end){
    for (let i = start; i <= end; i++){
        if (i % 2 === 0){
            return i
        }
    }
    return "Чётных чисел нет"
}

console.log(findFirstEven(234234523423452,324234325345234235))