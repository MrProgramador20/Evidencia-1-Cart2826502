//Ejemplo
//Sintaxis: Declaracion de Funcion
//Invocar, llamar, ejecutar el saludo
saludo("mi 750")//-> argumento: Jose
function saludo(nombre){//->Parametro
    console.log(`Como es ${nombre}`)
}

//Sintaxis: Expresion Funcion
//Se asigna a una constante
const saludo2 = function(nombre = "Jose"){//->parametros por defecto
    console.log(`Como seria ${nombre}`)
}
//Invocar saludo 2:
saludo2()



