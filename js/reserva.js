/* 
 ___________________________________________
|              RESERVA                      |
|___________________________________________|
|                                           |
| -horario: Date                            |
| -cantidadDePersonas: int                  |
| -precioPorPersona: int                    |
| -codigoDescuento: string                  |
|___________________________________________|
|                                           |
| +calcularPrecioBase()                     |
| +calcularPrecioFinal()                    |
| -calcularDescuento()                      |
| -calcularAdicional()                      |
|___________________________________________|

*/


class Reserva{
    constructor(fecha, cantidadDePersonas, precioPorPersona, codigoDescuento){
        this.fecha = fecha
        this.cantidadDePersonas = cantidadDePersonas
        this.precioPorPersona = precioPorPersona
        this.codigoDescuento = codigoDescuento
    }

    calcularPrecioBase = function(){
       return this.cantidadDePersonas * this.precioPorPersona; 
    }

    calcularPrecioFinal = function(){
        return this.calcularPrecioBase() + this.calcularAdicional() - this.calcularDescuento();
    }

    calcularDescuento = function(){
        return this.descuentoPorCantidad() + this.descuentoPorCodigo();
    }

    descuentoPorCantidad = function(){
        if(this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6){
            return this.calcularPrecioBase() * 5 / 100;
        }
        if(this.cantidadDePersonas == 7 && this.cantidadDePersonas == 8){
            return this.calcularPrecioBase() * 10 / 100;
        }
        if(this.cantidadDePersonas > 8){
            return this.calcularPrecioBase() * 15 / 100;
        }
    }

    descuentoPorCodigo = function(){
        if(this.codigoDescuento == 'DES15'){
            return this.calcularPrecioBase() * 15 / 100;
        }
        if(this.codigoDescuento == 'DES200'){
            return 200;
        }
        if(this.codigoDescuento == 'DES1'){
            return this.precioPorPersona;
        }
    }

    calcularAdicional = function(){
        
    }
}