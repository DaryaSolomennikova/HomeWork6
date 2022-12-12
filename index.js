// Home work 6: 
 
// NORMAL 

// Task 1. 

// Way 1. Function Declaration

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(function(numb){
console.log(numb);
});

// Way 2. Arrow Function

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach((numb)=>{
console.log(numb);
});

// Task 2. 

// Way 1. Function Declaration

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
users.map(function(a){ 
    console.log('member'+ ' '+(users.indexOf(a)+1) + ': '+a) 
});

// Way 2. Arrow Function

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
users.map((a)=> console.log('member'+ ' '+(users.indexOf(a)+1) + ': '+ a));

// Task 3.

// Way 1. Function Declaration

const numbers = [7, -4, 32, -90, 54, 32, -21];
function positiveNumbers(numbers){
    return numbers > 0;
}
console.log(numbers.filter(positiveNumbers));

// Way 2. Arrow Function

const numbers = [7, -4, 32, -90, 54, 32, -21];
let positiveNumbers = (numbers) => numbers > 0;
console.log(numbers.filter(positiveNumbers));

// Task 4.

// Way 1. Function Declaration

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let result = fibonacci.reduce(function(sum, elem) {
	return sum + elem;
});
console.log(result);

// Way 2. Arrow Functon

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
console.log(fibonacci.reduce((el, cal) => el+cal));

// Task 5. 

// Way 1. Function Declaration

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let result = (numbers.find(function(el){
    return el%2==0 }));
console.log(result);

// Way 2. Arrow Functon

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbers.find((el)=> el%2==0));

// ADVANCED

// Task 1. 

let Student = function(person){
    this.totalCredit = function(){
        const credit = person.map(persona => {
        switch(persona.rate){
        case 'A':
            return persona.salary*12;
        case 'B':
            return persona.salary*9;
        case 'C':
            return persona.salary*6; 
        case 'D':
            return persona.salary*1;
    }
    });
    return credit.reduce((persona, elem) => persona+elem);
    };
    };
    
const students = new Student([
    {
        salary: 400,
        rate: 'B',
        name:'Maksim',    
},
    {
        salary: 500,
        rate: 'D',
        name:'Aleksey',
},
    {
        salary: 450,
        rate: 'C',
        name:'Darya',    
},
    {
        salary: 500,
        rate: 'A',
        name:'Angelina',
},
    {
        salary: 350,
        rate: 'C',
        name:'Dmitry',
}
]);
    
console.log(`Общая суммa кредитов, которую можно выдать группе:`,students.totalCredit());

// Task 2.

let comment = prompt("Введите комментарий");
function removowels(str){
    let vowels = ['a', 'e', 'o', 'i', 'u','A','O','E','I','U'];
    return str
    .split('')
    .filter(str => !vowels.includes(str))
    .join('');
}
alert(removowels(comment));

// Task 3.

let string = prompt ('Введите текст или буквы');
const accum = (string) => {  
    const result = string.toLowerCase().split('').map((el, i) => {
        el = new Array(i+1).fill(el);
        el[0] = el[0].toUpperCase();
      return el.join('');
    });
    return result.join('-');
};
console.log(accum(string));

// Task 4.
 
// Way 1.

function highAndLow (str) { 
    let numbers = str.split(' ') 
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));

// Way 2. Arrow Function

let highAndLow = (str) => {
    let numbers = str.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
};
console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));

// Task 5. 

// Way 1. Function Declaration

function isIsogram (str) {
    return str.length == new Set(str.toLowerCase()).size;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// Way 2. Arrow Function

let isIsogram = (str) => { 
    return str.length == new Set(str.toLowerCase()).size;
};
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// Task 6.

 let ascii = (word) => {
 let arr = word.split('')
 let c = [];
 for (let i = 0; i < arr.length; i++) {
 let a = arr[i].charCodeAt();
 c.push(a);
 }
 let total1 = c.join('');
 console.log(total1)
 let total2 = total1.replace(7, 1);
 console.log(total2)
 let result = +total1 - +total2
 return (`${total1} - ${total2} = ${result}`);
 }
 console.log(ascii('ABC'));

// Task 7.  

let getNewString = (words) => {
   return words = words.toLowerCase().split('').map(function(elem,i,arr){
 return arr.indexOf(elem)===arr.lastIndexOf(elem) ? '(':')'
   })
   .join('')
 }
 console.log(getNewString('din'));
 console.log(getNewString('recede'));
 console.log(getNewString('Success'));
 console.log(getNewString('(( @'));