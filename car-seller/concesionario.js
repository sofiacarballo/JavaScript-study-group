const Moto = require("./moto");
const Auto = require("./auto");
const Vehiculo = require("./vehiculo");

let vehiculo1 = new Auto('Peugeot', '206', 200000.00, 4)
let vehiculo2 = new Moto('Honda', 'Titan', 60000.00, '125cc');
let vehiculo3 = new Auto('Peugeot', '208', 250000.00, 5);
let vehiculo4 = new Moto('Yamaha', 'YBR', 80500.50, '160cc')

concesionario = [vehiculo1, vehiculo2, vehiculo3, vehiculo4]

let precio_max = Math.max(vehiculo1.precio, vehiculo2.precio, vehiculo3.precio, vehiculo4.precio)

concesionario.forEach(vehiculo => {
    if (vehiculo.precio == precio_max) {
       vehiculo_mas_caro = vehiculo.marca + ' ' + vehiculo.modelo
       return vehiculo_mas_caro
    }
});

console.log('Vehiculo más caro: ' + vehiculo_mas_caro)

let precio_min = Math.min(vehiculo1.precio, vehiculo2.precio, vehiculo3.precio, vehiculo4.precio)

concesionario.forEach(vehiculo => {
    if (vehiculo.precio == precio_min) {
       vehiculo_mas_barato = vehiculo.marca + ' ' + vehiculo.modelo
       return vehiculo_mas_barato
    }
});

console.log('Vehiculo más barato: ' + vehiculo_mas_barato)


concesionario.forEach(vehiculo => {
    if (vehiculo.marca.includes('Y')) {
        vehiculo_contiene_y = vehiculo.marca + ' ' + vehiculo.modelo + ' ' + vehiculo.precio;
        return vehiculo_contiene_y
    }
});

console.log('Vehiculo que contiene en el modelo la letra Y ' + vehiculo_contiene_y)

let vehiculos_precios = [vehiculo1.precio, vehiculo2.precio, vehiculo3.precio, vehiculo4.precio]

let vehiculos_ordenados = vehiculos_precios.sort()

console.log(vehiculos_ordenados)