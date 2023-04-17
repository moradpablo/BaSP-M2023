console.log(' EXERCISE 1: VARIABLES AND OPERATORS ');

/* a.Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números
 en una 3er variable.*/

console.log('Excercise 1.a: ');
var firstSum = 25;
var secondSum = 20;
var result = firstSum + secondSum;
console.log(result);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('Excercise 1.b: ');
var firstName = 'Pablo';
var lastName = 'Morad';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('Excercise 1.c: ');
var firstMessage = 'The radium bootcamp';
var secondMessage = 'is helping me a lot';
var resultLength = firstMessage.length + secondMessage.length;
console.log(resultLength);
