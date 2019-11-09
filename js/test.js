var expect = chai.expect;

describe('Test de reserva de horarios', function(){
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

/*var expect = chai.expect; 

describe('Se obtiene el total del dinero del cajero', function(){
	it('Al obtener el total de un cajero con los billetes [10, 5, 1, 1] se obtiene 17',function(){
        var cajero = new Cajero([10, 5, 1, 1]);
        expect(cajero.dineroEnCaja()).to.equal(17);
    })

    it('Al obtener el total de un cajero sin billetes, se obtiene 0',function(){
        var cajero = new Cajero([]);
        expect(cajero.dineroEnCaja()).to.equal(0);
    })
})

describe('Responde correctamente si puede otorgar cierto monto de dinero', function(){
	it('Dado un cajero con los billetes [50, 20, 10, 5], si le pedimos 70 pesos, puede otorgarlos ',function(){
        var cajero = new Cajero([50, 20, 10, 5]);
        expect(cajero.otorgarDinero(70)).to.be.true;
    })

    it('Dado un cajero con los billetes [50, 20, 10, 5], si le pedimos 1000 pesos, no puede otorgarlos ',function(){
        var cajero = new Cajero([50, 20, 10, 5]);
        expect(cajero.otorgarDinero(1000)).to.be.false;
    })
})*/