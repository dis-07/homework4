'use strict';


// как понять что когда и где использувать ? 
    // потому-что по отдельности я понимаю впринцыпе как код работает, а вот сложить его все вместе толком не могу (
        // нужно еще искать кучу инфы и разных примеров чтобы хоть как-то понять.

        // P.S. со 2-м заданием так и не разобрался


////////////////// Task #1

const array = [2, 18, 33, 40, 1, 0, -3, 10];

let sum = 0;
const length = array.length;

for (let i = 0; i < array.length; i++) {

    sum += array[i];
}
let getAverage = sum / length;
console.log(getAverage);



// const getAverage = (array) => {
//     const sum = array.reduce((acc, array) => acc + array, 0);
//     console.log(sum);

//     const length = array.length;
//     return sum / length;
// }
// console.log(getAverage(array));



// // const array = [2, 18, 33, 40, 1, 0, -3, 10].reduce(function(a, b)
// // {
// //     return a + b;
// // });

// // console.log(array);


//////////////////////////////////


/////////////////   Task #2


// let array = [2, 'olol', 3, 10, true, null, 11, '100'];

// console.log(array.typeof(Number));


////////////////

//////////////////  Task #3


// const arr = [];

// for (let i = 0; i < 10; i++) {
//     let random = Math.random();
//     let fix = random.toFixed(2);
    
//     arr.push(fix);
// }

// console.log(arr);

// arr.forEach(function (arr) {
//     console.log(arr**5);
// });


////////////////////

//////////////////      Task #4


// let array =[];

// for (let i = 0; i < 10; i++) {
//     array.push([]);
//     for (let j = 0; j < 10; j++) {
//         let q = i + 1;
//         let w = j + 1;
//         array[i].push( `${q}`, 'x', `${w}`, '=', q * w);
//     }
// };

// console.log(array);


////////////////// Task #5


// let data = {};

// data.name = prompt('Enter your name: ');
// data.surname = prompt('Enter your surname');
// data.position = prompt('Enter your position: ');

// console.log('hello', `${data.name}`, `${data.surname}`,'.', 'How long have you been working in the position', `${data.position}`, '?')


//////////////////////

///////////////////     Task #6  это решение немного подсмотрел )


// let obj = {};


// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// };

// console.log(isEmpty(obj));