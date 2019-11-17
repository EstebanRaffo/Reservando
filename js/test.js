var expect = chai.expect;

// Guia 1

// Paso 2: Testeá la función reservarHorario(horario)
describe('Test de Reserva de Horarios', function(){
    it('Cuando se reserva un horario, el mismo es eliminado del arreglo de horarios', function(){
        var resto = new Restaurant(25, "Maison", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        resto.reservarHorario('21:00');
        var disponibles = resto.horarios; 
        expect(disponibles.indexOf('21:00')).to.equal(-1);
    })

    it('Cuando se reserva un horario no disponible, el arreglo de horarios se mantiene igual', function(){
        var resto = new Restaurant(26, "Maison", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]); 
        var longitudAntesDeReservar = resto.horarios.length;
        resto.reservarHorario('16:00');
        expect(resto.horarios.length == longitudAntesDeReservar).to.be.true; 
    })

    it('Cuando se intenta reservar sin pasar un horario el arreglo de horarios se mantiene igual', function(){
        var resto = new Restaurant(27, "Maison", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var longitudAntesDeReservar = resto.horarios.length;
        resto.reservarHorario();
        expect(resto.horarios.length == longitudAntesDeReservar).to.be.true;
    })
})

// Paso 3: Testeá la función obtenerPuntuación()
describe('Test de Obtener Puntuación', function(){
    it('Calculo del promedio de las calificaciones', function(){
        var resto = new Restaurant(28, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5, 6, 7, 8, 9]);
        expect(resto.obtenerPuntuacion()).to.equal(7);
    })

    it('Calculo del promedio de un restaurant sin calificaciones', function(){
        var resto = new Restaurant(29, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        expect(resto.obtenerPuntuacion()).to.equal(0);
    })
})

// Paso 4: Testeá la función calificar()
describe('Test de Calificar Restaurant', function(){
    it('Validar que la calificación sea un valor entero', function(){
        var resto = new Restaurant(30, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5, 6, 7, 8, 9]);
        var calificacionesAntesDeLaNueva = resto.calificaciones.length;
        resto.calificar(5.1);
        var calificacionesConLaNueva = resto.calificaciones.length;
        expect(calificacionesAntesDeLaNueva).to.equal(calificacionesConLaNueva);
    })

    it('Validar que la calificación sea un valor mayor que 0', function(){
        var resto = new Restaurant(30, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5, 6, 7, 8, 9]);
        var calificacionesAntesDeLaNueva = resto.calificaciones.length;
        resto.calificar(-1);
        var calificacionesConLaNueva = resto.calificaciones.length;
        expect(calificacionesAntesDeLaNueva).to.equal(calificacionesConLaNueva);
    })

    it('Validar que la calificación sea un valor menor que 10', function(){
        var resto = new Restaurant(30, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5, 6, 7, 8, 9]);
        var calificacionesAntesDeLaNueva = resto.calificaciones.length;
        resto.calificar(10);
        var calificacionesConLaNueva = resto.calificaciones.length;
        expect(calificacionesAntesDeLaNueva).to.equal(calificacionesConLaNueva);
    })
})

// Paso 5: Testeá la función buscarRestaurante(id)
describe('Test de Buscar Restaurante', function(){
    it('El id buscado pertenece a un resto existente', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
        ];
        var listado = new Listado(listadoDeRestaurantes); 
        var resto = listado.buscarRestaurante(3);
        expect(3).to.equal(resto.id);
    })

    it('El id buscado no pertenece a ningún resto existente', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var resto = listado.buscarRestaurante(3);
        expect(3).to.not.equal(resto.id);        
    })
})

// Paso 6: Testeá la función obtenerRestaurantes()
describe('Test de Obtener Restaurantes', function(){
    it('Solo Filtro Rubro no informado', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "TAO", "Pizza", "Nueva York", ["14:00", "16:30", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(3, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "15:30", "18:00"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(4, "Mandarín", "Pizza", "Londres", ["16:00", "15:30", "13:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(5, "Burgermeister", "Hamburguesa", "Berlín", ["13:00", "15:30", "18:00"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(6, "Jolly", "Pasta", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Osteria", "Ensalada", "Roma", ["13:30", "16:30", "19:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(9, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(10, "La Trottinette", "Desayuno", "París", ["13:00", "15:30", "18:00"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7])    
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var filtrados = listado.obtenerRestaurantes(null, "Londres", "15:30");
        
        expect(filtrados.length).to.equal(2);
    })

    it('Solo Filtro Rubro informado', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "TAO", "Pizza", "Nueva York", ["14:00", "16:30", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(3, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "15:30", "18:00"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(4, "Mandarín", "Pizza", "Londres", ["16:00", "15:30", "13:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(5, "Burgermeister", "Hamburguesa", "Berlín", ["13:00", "15:30", "18:00"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(6, "Jolly", "Pasta", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Osteria", "Ensalada", "Roma", ["13:30", "16:30", "19:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(9, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(10, "La Trottinette", "Desayuno", "París", ["13:00", "15:30", "18:00"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7])    
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var filtrados = listado.obtenerRestaurantes("Asiática", null, null);
        
        expect(filtrados.length).to.equal(2);
    })

    it('Solo Filtro Ciudad no informado', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "TAO", "Pizza", "Nueva York", ["14:00", "16:30", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(3, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "15:30", "18:00"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(4, "Mandarín", "Pizza", "Londres", ["16:00", "15:30", "13:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(5, "Burgermeister", "Hamburguesa", "Berlín", ["13:00", "15:30", "18:00"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(6, "Jolly", "Pasta", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Osteria", "Ensalada", "Roma", ["13:30", "16:30", "19:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(9, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(10, "La Trottinette", "Desayuno", "París", ["13:00", "15:30", "18:00"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7])    
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var filtrados = listado.obtenerRestaurantes("Pizza", null, "15:30");
        
        expect(filtrados.length).to.equal(1);
    })

    it('Solo Filtro Ciudad informado', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "TAO", "Pizza", "Nueva York", ["14:00", "16:30", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(3, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "15:30", "18:00"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(4, "Mandarín", "Pizza", "Londres", ["16:00", "15:30", "13:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(5, "Burgermeister", "Hamburguesa", "Berlín", ["13:00", "15:30", "18:00"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(6, "Jolly", "Pasta", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Osteria", "Ensalada", "Roma", ["13:30", "16:30", "19:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(9, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(10, "La Trottinette", "Desayuno", "París", ["13:00", "15:30", "18:00"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7])    
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var filtrados = listado.obtenerRestaurantes(null, 'Berlín', null);
        
        expect(filtrados.length).to.equal(2);
    })

    it('Solo Filtro Horario no informado', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "TAO", "Pizza", "Nueva York", ["14:00", "16:30", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(3, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "15:30", "18:00"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(4, "Mandarín", "Pizza", "Londres", ["16:00", "15:30", "13:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(5, "Burgermeister", "Hamburguesa", "Berlín", ["13:00", "15:30", "18:00"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(6, "Jolly", "Pasta", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Osteria", "Ensalada", "Roma", ["13:30", "16:30", "19:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(9, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(10, "La Trottinette", "Desayuno", "París", ["13:00", "15:30", "18:00"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7])    
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var filtrados = listado.obtenerRestaurantes('Pasta', 'Berlín', null);

        expect(filtrados.length).to.equal(1);
    })

    it('Solo Filtro Horario informado', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "TAO", "Pizza", "Nueva York", ["14:00", "16:30", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(3, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "15:30", "18:00"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(4, "Mandarín", "Pizza", "Londres", ["16:00", "15:30", "13:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(5, "Burgermeister", "Hamburguesa", "Berlín", ["13:00", "15:30", "18:00"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(6, "Jolly", "Pasta", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Osteria", "Ensalada", "Roma", ["13:30", "16:30", "19:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(9, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(10, "La Trottinette", "Desayuno", "París", ["13:00", "15:30", "18:00"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7])    
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var filtrados = listado.obtenerRestaurantes(null, null, '18:00');
        
        expect(filtrados.length).to.equal(5);
    })
})


// Guía 3

// Paso 1 - Red: Convertí los requerimientos en pruebas unitaria

describe('Test de Cálculo de Precios de Reserva', function(){
    it('Test de cálculo del Precio Base de Reserva 1', function(){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        var precioBase = reserva1.calcularPrecioBase();

        expect(precioBase).to.equal(2800);
    })
    it('Test de cálculo del Precio Final de Reserva 1', function(){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        var precioFinal = reserva1.calcularPrecioFinal();

        expect(precioFinal).to.equal(2450); // El resultado de 2310 indicado en la guía es incorrecto. El precio final de la reserva 1 es 2450.
    })
    it('Test de cálculo del Precio Base de Reserva 2', function(){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        var precioBase = reserva2.calcularPrecioBase();

        expect(precioBase).to.equal(300);
    })
    it('Test de cálculo del Precio Final de Reserva 2', function(){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        var precioFinal = reserva2.calcularPrecioFinal();
       
        expect(precioFinal).to.equal(100);
    })
})