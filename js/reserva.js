/* 
 ___________________________________________
|                 RESERVA                   |
|___________________________________________|
|                                           |
| -fecha: Date                              |
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
        var descuentoPorCantidad = 0;
        
        if(this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6){
            descuentoPorCantidad = this.calcularPrecioBase() * 5 / 100;
        }
        if(this.cantidadDePersonas == 7 || this.cantidadDePersonas == 8){
            descuentoPorCantidad = this.calcularPrecioBase() * 10 / 100;
        }
        if(this.cantidadDePersonas > 8){
            descuentoPorCantidad = this.calcularPrecioBase() * 15 / 100;
        }

        return descuentoPorCantidad;
    }

    descuentoPorCodigo = function(){
        var descuentoPorCodigo = 0;

        if(this.codigoDescuento == 'DES15'){
            descuentoPorCodigo = this.calcularPrecioBase() * 15 / 100;
        }
        if(this.codigoDescuento == 'DES200'){
            descuentoPorCodigo = 200;
        }
        if(this.codigoDescuento == 'DES1'){
            descuentoPorCodigo = this.precioPorPersona;
        }

        return descuentoPorCodigo;
    }

    calcularAdicional = function(){
        var adicional = 0;

        // Adicional por horario
        if(this.fecha.getDay() >= 1 && this.fecha.getDay() <= 4){
            if(this.fecha.getHours() == 13 || this.fecha.getHours() == 14 || this.fecha.getHours() == 20 || this.fecha.getHours() == 21){
                adicional = this.calcularPrecioBase() * 5 / 100;
            }
        }
        // Adicional por fin de semana
        else{
            adicional = this.calcularPrecioBase() * 10 / 100;
        }

        return adicional;
    }
}