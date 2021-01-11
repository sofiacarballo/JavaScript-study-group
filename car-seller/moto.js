const Vehiculo = require("./vehiculo");

class Moto extends Vehiculo {
    constructor(marca, modelo, precio, cilindrada) {
      super(marca, modelo, precio);
      this.cilindrada = cilindrada;
    }
  }
  
module.exports = Moto;