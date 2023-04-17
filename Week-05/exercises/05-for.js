console.log(' EXERCISE 5: FOR ');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
para mostrar una alerta utilizando cada una de las palabras.*/

console.log('Excercise 5.a: ');
var words = ['dog', 'house', 'computer', 'mouse', 'screen'];
for (var i = 0; i < words.length; i++) {
  alert(words[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta 
por cada palabra modificada.*/

console.log('Excercise 5.b: ');
var words = ['dog', 'house', 'computer', 'mouse', 'screen'];
for (var i = 0; i < words.length; i++) {
  var editedWords = words[i][0].toUpperCase() + words[i].substring(1);
  alert(editedWords);
}

/* c.Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final 
mostrar una única alerta con la cadena completa.*/

console.log('Excercise 5.c: ');
var sentence = ' ';
var words = ['dog', 'house', 'computer', 'mouse', 'screen'];
for (var i = 0; i < words.length; i++) {
  sentence = sentence + words[i];
}
alert(sentence);

/*Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, 
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 
0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('Excercise 5.d: ');
var emptyArray = [];
for (var i = 0; i < 10; i++) {
  emptyArray.push(i);
}
console.log(emptyArray);
