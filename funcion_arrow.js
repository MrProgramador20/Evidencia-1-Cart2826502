//Sintaxis: Funcion arrow/flecha
/*reglas:
1. si el bloque del codigo de la funcion flecha solo tiene una linea, no hace falta ponerle los corchetes
2. si tienen un solo parametro se puede omitir el parentesis de los parmetros
3. Si el bloque del codigo de la funcion flecha solo tiene una linea, y, esta linea debe retornar un valor, 
es posible omitir el return pero solo si se aplica la regla 1.
*/
const saludo = nombre =>  `hola ${nombre} desde aqui`


//invocar la funcion flecha

console.log(saludo("jose"));