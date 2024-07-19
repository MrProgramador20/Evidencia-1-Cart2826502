const carrito = [
    {
        nombre : "Asus Gaming",
        descripcion : "Laptop para gaming",
        tipoproducto : "Computador portatil",
        modelo : "VG6",
        precio : {
            minimoVenta : 300000,
            compra : 1000000
        },
        caracteristicas : {
            dimensiones : {
                alto : 2,
                ancho : 50,
                largo : 30
            },
            fabricacion : {
                pais : "Taiwan",
                fecha : new Date('2017-05-02')
                
            }

        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }     
    },
    {
        nombre : "Nvidia GTX 1650",
        descripcion : "Tarjeta Grafica para pc de escritorio",
        tipoproducto : "Tarjeta Grafica",
        modelo : "Serie 1650",
        precio : {
            minimoVenta : 8000,
            compra : 2000000
        },
        caracteristicas : {
            dimensiones : {
                alto : 4,
                ancho : 54,
                largo : 34
            },
            fabricacion : {
                pais : "Estados Unidos",
                fecha : new Date('2018-06-03')
            }

        },

    },
    {
        nombre : "Rizen 5 5600g",
        descripcion : "Procesador para computadors de escritorio",
        tipoproducto : "Procesador",
        modelo : "Serie 5000",
        precio : {
            minimoVenta : 1500000,
            compra : 600000
        },
        caracteristicas : {
            dimensiones : {
                alto : 5,
                ancho : 6,
                largo : 4
            },
            fabricacion : {
                pais : "Ucrania",
                fecha : new Date('2019-07-01')
            }

        },
    },
    { 
        nombre : "Iphone 14 pro max",
        descripcion : "Celular Alta Gama",
        tipoproducto : "Telfono",
        modelo : "Serie 14",
        precio : {
            minimoVenta : 5100000,
            compra : 400000
        },
        caracteristicas : {
            dimensiones : {
                alto : 10,
                ancho : 16,
                largo : 14
            },
            fabricacion : {
                pais : "Bielorrusia",
                fecha : new Date('2019-09-04')
            }

        },
    },
    {
        nombre : "Samsung S28 Ultra",
        descripcion : "Celular ultra alta gama",
        tipoproducto : "Telefono",
        modelo : "Serie 28",
        precio : {
            minimoVenta : 9999,
            compra : 5000000
        },
        caracteristicas : {
            dimensiones : {
                alto : 1,
                ancho : 16,
                largo : 14
            },
            fabricacion : {
                pais : "China",
                fecha : new Date('2018-05-02')
            }

        },
    }

]

//recorrer el carrito de compra con el metodo forEach no retorna un nuevo arreglo
carrito.forEach(producto => {
    if(producto.caracteristicas.fabricacion.pais === 'Taiwan')
    console.log(producto.nombre)
})
//filter: recorre el arreglo buscando elementos que concuerden con la condicional establecida en el filtro
//creando un nuevo arreglo con los objetos que cumplen dicho criterio
let productosTaiwan = carrito.filter((producto) =>{
    return producto.caracteristicas.fabricacion.pais === 'Taiwan'
})
//console.log(productosTaiwan)
//metodo de transformacion map
let preciosCompra = carrito.map((producto) => {
    return producto.precio.compra
})

console.log(preciosCompra)


//calculo del total del inventario
let total = 0
carrito.forEach(producto => {
    //acumular el valor de compra de cada producto recorrido en la variable total
    total += producto.precio.compra
})
console.log(`el valor del invetario es: ${total}`)
//utilizando el methon reduce: reduce a un solo valor el arrevlo, con base en una expresion
let inventario = carrito.reduce((total, producto)=>{
    return total + producto.precio.compra
}, 0)

console.log(`El valor del inventario es: ${inventario}`)


//ejercicio 5.1
console.log("ejercicio 5.1: ")
for(const producto of carrito){
    console.log(producto)
}

console.log("----------------------------------------------------")
//ejercicio 6
console.log("Ejercicio 6")
let calculoInventario = carrito.reduce((total, producto) =>{
    return total + producto.precio.compra
}, 0)
console.log(`El inventario total es: ${calculoInventario}`)

console.log("----------------------------------------------------")
//ejercicio 7.1
console.log("ejercicio 7.1: ")
carrito.forEach((productosPais) =>{
    if(productosPais.caracteristicas.fabricacion.pais === 'China')
        console.log(productosPais.nombre)

})
console.log("----------------------------------------------------")
//ejercicio 7.2
console.log("ejercicio 7.2: ")
carrito.forEach((productoDimensiones) =>{
    if(productoDimensiones.caracteristicas.dimensiones.alto >= 2)
        console.log(productoDimensiones.nombre)
})
console.log("----------------------------------------------------")

//ejercicio 7.3
console.log("ejercicio 7.3: ")
carrito.forEach((productoVenta)=>{
    if(productoVenta.precio.minimoVenta <= 10000)
        console.log(productoVenta.nombre)
})

//ejecutar el metodo: obtenerPrecioCompra:
//console.log(carrito[0].obtenerPrecioCompra())
//imprimir nombre: 
//console.log(carrito[0].caracteristicas.dimensiones.alto)