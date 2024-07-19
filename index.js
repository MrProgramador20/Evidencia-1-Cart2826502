console.log("carrito para las compras")
//Template String:
//Alternativda a la concatenacion
//Permite incrustar un valor denyto de un String

const nombreProducto = new String("RTX 4090 TI")
console.log(`El producto es: ${nombreProducto}`) 

const precioProducto = 23;
const precioProductoStr = "23";

console.log(precioProducto)
console.log(precioProductoStr)

//Objeto Producto:
//Objeto Literal:

const producto1 = {
    nombre : "Ryzen 5 5600G",
    color : 'Gray',
    modelo : "5600",
    descripcion : "procesador con graficos integrados",
    precio : 54000.00,
    getDescripcion : function(){
        console.log(this.descripcion)
    } 
}

producto1.imagen = "imagen1.jpg"

//Invocar metodo getMoledo
producto1.getDescripcion

//Sin desestructuracion
nombresito = producto1.nombre
console.log(nombresito)

//con desestructuracion
const { descripcion, precio } = producto1
console.log(descripcion, precio)

//Obejto constructor
const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//instancias de producto
const p1 = new Producto("lapiz HB Berol", "Azul", 50000.00)
console.log(p1)

//Acceder a los atributos del objeto
console.log(producto1["descripcion"])

//operador spread
const medidas = {
    "peso" : "50g",
    "altura" : "1m",
    "largo" : "50cm"
}

const nuevoProducto = {...producto1, ...medidas}

console.log(nuevoProducto)

