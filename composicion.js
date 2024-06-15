class Motor{
    constructor(tipo,cilindrada){
        this.tipo = tipo;
        this.cilindrada = cilindrada;
    }

    iniciar(){
        console.log(`Motor ${this.tipo} (${this.cilindrada} cc) iniciado.`);
    }

    detener(){
        console.log(`Motor ${this.tipo} apagado.`);
    }
}

class Carro{
    constructor(color,marca,modelo,numPuertas,motor){

        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numPuertas = numPuertas;

        // COMPOSICION DE LA CLASE MOTOR
        this.motor = motor;
    }
    
    mostrarDetalle(){
        console.log(`Carro ${this.marca} ${this.modelo}, Color ${this.color}, Numero de puertas: ${this.numPuertas}`);
        console.log(`Motor ${this.motor.tipo} ${this.motor.cilindrada} cc`);
    }

    arrancar(){
        this.motor.iniciar();
        console.log(`El carro ${this.marca} ${$this.modelo} ha arrancado`);
    }

    detener(){
        this.motor.detener();
        console.log(`El carro ${this.marca} ${$this.modelo} se ha detenido`);
    }
}

const motorCarro = new Motor('Gasolina', 2000);

const miCarro = new Carro('verde', 'Mercedes', '2024', 3, motorCarro);

miCarro.mostrarDetalle();