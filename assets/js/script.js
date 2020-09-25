class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `${this.nombre}, domiciliado en: ${this.direccion} y su telefono es: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo) {
        super(nombre, direccion, telefono);
        this.nombreAnimal = nombreAnimal;
        this.tipo = tipo;
    }

    datosAnimal() {
        return `${this.nombreAnimal}, tipo: ${this.tipo}`;
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

let formulario = document.querySelector('form');
console.log(formulario);

let validando = (event) => {
    event.preventDefault();
    let nombre = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let nombreAnimal = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    let pro1 = new Propietario(nombre, direccion, telefono);
    let ani1 = new Perro(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) || new Gato(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) || new Conejo(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad);
    switch(ani1 == 'Perro') {
        case 'Perro':
            ani1 = new Perro(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad);
            break;
        case 'Gato':
            ani1 = new Gato(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad);
            break;
        case 'Conejo':
            ani1 = new Conejo(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad);
            break;
    }



    document.getElementById('resultado').innerHTML =    `<ul>
                                                            <li>El nombre del dueño es: ${pro1.datosPropietario()}</li>
                                                            <li>El nombre del animal es: ${ani1.datosAnimal()} y la enfermedad es: ${ani1.enfermedad}</li>
                                                        </ul>`;

                                                        console.log(Propietario.telefono);
                                                        console.log(ani1);

}

formulario.addEventListener('submit', validando)

/* let pro1 = new Propietario('Angel', 'Santiago Centro', 931231795);
let ani1 = new Perro('Angel', 'Santiago Centro', '931231795', 'Kira', 'Perro', 'otitis');

console.log(pro1.telefono);
console.log(ani1.enfermedad); */
