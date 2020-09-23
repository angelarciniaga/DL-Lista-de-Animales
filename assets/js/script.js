class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `Los datos del propietario son: ${this.nombre}, ${this.direccion} y ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo) {
        super(nombre, direccion, telefono);
        this.nombreAnimal = nombreAnimal;
        this.tipo = tipo;
    }

    datosAnimal() {
        return `Los datos del animal son: nombre: ${this.nombreAnimal}, tipo: ${this.tipo}.`;
    }
}

class Perro extends Animal {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
        super(nombre, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(otraEnfermedad) {
        this._enfermedad = otraEnfermedad;
    }
}

class Gato extends Animal {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
        super(nombre, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(otraEnfermedad) {
        this._enfermedad = otraEnfermedad;
    }
}

class Conejo extends Animal {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
        super(nombre, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(otraEnfermedad) {
        this._enfermedad = otraEnfermedad;
    }
}

let pro1 = new Propietario('Angel', 'Santiago Centro', '931231795');
let ani1 = new Animal('Angel', 'Santiago Centro', '931231795', 'Kira', 'Perro');

//console.log(pro1.datosPropietario());
console.log(ani1.datosAnimal());