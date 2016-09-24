var names = [];
for (var i = 0; i < 5; i++) {
    names[i] = prompt('Введите любое имя:', '');
}
var addName = prompt ("Введите свое имя", '');
var message = 'Ошибка';

for (var i = 0; i < names.length; i++) {
    if (names[i] === addName) {
        var message = addName + ', Вы успешно вошли';
    }
}

alert(message)
