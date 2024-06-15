class Vehiculo{
        constructor(color,marca,modelo){
            this.color= color;
            this.marca = marca;
            this.modelo =modelo;
        }

        arrancar(){
            console.log(`El vehiculo ha arrancado.`);
        }
    }

class Carro extends Vehiculo{
        constructor(color,marca,modelo,numPuertas){
        super(color,marca,modelo);
        this.numPuertas = numPuertas;
        }

        abrirPuertas(){
            console.log(`se han abierto las ${this.numPuertas} del carro.`);
        }

    }

 const miCarro = new Carro('azul neon', 'Chevrolet', 'Spark GT', 5);

    console.log(miCarro.color);
    console.log(miCarro.numPuertas);
    miCarro.arrancar();
    miCarro.abrirPuertas();