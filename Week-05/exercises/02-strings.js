console.log(' EXERCISE 2: STRINGS ');

/* a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase)*/

console.log('Excercise 2.a: ');
var firstMessage =
  'Javascript doesnt drive me as crazy as css, lets hope it stays that way';
console.log(firstMessage.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Excercise 2.b: ');
var randomMessage = 'Unbelievable';
console.log(randomMessage.substring(0, 5));

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Excercise 2.c: ');
var randomWord = 'Historical';
console.log(randomWord.substring(7, 10));

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('Excercise 2.d: ');
var newWord = 'magnificent';
var result =
  newWord.substring(0, 1).toUpperCase() + newWord.substring(1).toLowerCase();
console.log(result);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('Excercise 2.e: ');
var wordExample = 'interna tional';
console.log(wordExample.indexOf(' '));

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que
tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar
indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('Excercise 2.f: ');
var mainText = 'mUlTiNaTioNal cOrPoRaTiOn';
console.log(
  mainText.substring(0, 1).toUpperCase() +
    mainText.substring(1, mainText.indexOf(' ')).toLowerCase() +
    ' ' +
    mainText
      .substring(mainText.indexOf(' ') + 1, mainText.indexOf(' ') + 2)
      .toUpperCase() +
    mainText.substring(mainText.indexOf(' ') + 2).toLowerCase()
);
