var names = ['Андрей', 'Татьяна', 'Константин', 'Александра', 'Артем'];
var addName = prompt ("Введите свое имя", '');
var message = 'Ошибка';

for (var i = 0; i < names.length; i++) {
    if (names[i] === addName) {
        message = addName + ', Вы успешно вошли';
    }
}

alert(message);
