console.log(' EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Excercise 6.a: ');
function suma(num1, num2) {
  return num1 + num2;
}
var recive = suma(15, 16);
console.log(recive);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros 
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y 
retornar el valor NaN como resultado.*/

console.log('Excercise 6.b: ');
function suma(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    alert('One of the parameters has an error!');
    return NaN;
  } else {
    return num1 + num2;
  }
}
console.log(suma(5, 15.7));

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero 
si es un número entero.*/

console.log('Excercise 6.c: ');
function validateInteger(num) {
  return num % 1 === 0;
}
console.log(validateInteger(1));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del 
ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert
 con el error y retornar el número convertido a entero (redondeado). */

console.log('Excercise 6.d: ');
function newSuma(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    alert('One of the parameters has an error!');
    return NaN;
  } else {
    if (!validateInteger(num1) || !validateInteger(num2)) {
      alert('At least one of the numbers is not integer');
      return Math.round(num1) + Math.round(num2);
    } else {
      return num1 + num2;
    }
  }
}
console.log(newSuma(6.6, 7));

/* e.Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva 
función probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('Excercise 6.e: ');
function newFunction(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    alert('One of the parameters has an error!');
    return NaN;
  } else {
    if (!(num1 % 1 === 0) || !(num2 % 1 === 0)) {
      alert('At least one of the numbers is not integer');
      return Math.round(num1) + Math.round(num2);
    } else {
      return num1 + num2;
    }
  }
}
function newFunction2(num1, num2) {
  return newFunction(num1, num2);
}
console.log(newFunction2(5, 7.6));
