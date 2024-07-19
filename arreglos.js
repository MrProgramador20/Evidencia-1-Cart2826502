//definir un arreglo de nombres de producto

const nombres = ["Lapiz HB", "Resaltador", "Libreta", "Borrador"]
nombres[4] = "MicroPunta"


//agregar elementos al final: 
nombres.push("corrector")
console.table(nombres)

//agregar el elemnto al principio
nombres.unshift("Borrador miga de pan")

//eliminar elementos de un arreglo
delete nombres[3]

//eliminar elementos del final
nombres.pop()

//eliminar elementos del principio
nombres.shift()
console.table(productos)

for( let i=0; i<nombres.length ; i++ ){
    console.log(nombres[i])
}

//operador spread con arreglos:
const nombres2 = ["Compas", "Transportador", "Regla"]

const productos = [ ...nombres, ...nombres2 ] 