var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}


Restaurant.prototype.reservarHorario = function(horarioReservado){
    var horariosFiltrados = this.horarios.filter(function(horario){
        return horario != horarioReservado;
    });
    this.horarios = horariosFiltrados;
}


Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}


Restaurant.prototype.obtenerPuntuacion = function(){
    if(this.calificaciones.length === 0){
        return 0;
    }
    else{
        return this.calcularPromedio();
    }
}

Restaurant.prototype.calcularPromedio = function(){
    var sumatoria = this.calcularSumatoria();
    var promedio = sumatoria / this.calificaciones.length;

    return Math.round(promedio * 10) / 10;
}

Restaurant.prototype.calcularSumatoria = function(){
    var sumatoria = 0;

    for (var i = 0; i < this.calificaciones.length; i++) {
       sumatoria += this.calificaciones[i]
    }

    return sumatoria;
}