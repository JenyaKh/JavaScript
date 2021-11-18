//task 1

for (let i=10; i<=50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};

//task 2

const woman = {
    first_name: 'Yevheniia',
    last_name: 'Khapchenko',
    age: 32,
    pets: true
};

console.log(woman);

//task 3

const array = [
    'я в Симбирск,', 
    'в трактире.', 
    'с утра', 
    'В ту же ночь', 
    'Я остановился', 
    'для закупки',  
    'что и было поручено Савельичу.', 
    'приехал', 
    'где должен был', 
    'нужных вещей', 
    'отправился по лавкам', 
    'пробыть сутки', 
    'Савельич' 
];

let result = `${array[3]} ${array[7]} ${array[0]} ${array[8]} 
              ${array[11]} ${array[5]} ${array[9]} ${array[6]} 
              ${array[4]} ${array[1]} ${array[12]} ${array[2]} 
              ${array[10]}`;

console.log(result);

// task 4

const full_name = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};

full_name('Yevheniia', 'Khapchenko');

// task 5
//Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67

let number = 21;
while (number <= 67) {
    if (number % 2 == 1) {
        console.log(number);
    }
    number++;
}






