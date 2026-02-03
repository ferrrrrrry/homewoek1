// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
    name: "Илья",
    age: 17,
    city: "Новосибирск",
    isStudent: true
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.isStudent);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEmpty(person));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
    title: "Задача 1",
    description: "Описание задачи 1",
    isCompleted: false
}

function cloneAndModify(object, modifications) {
    return { ...object, ...modifications };
}

const modifiedTask = cloneAndModify(task, { isCompleted: true });

for (const key in modifiedTask) {
    console.log(key + ": " + modifiedTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
}

function callAllMethods(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key]();
        }
    }
}

callAllMethods(myObject);