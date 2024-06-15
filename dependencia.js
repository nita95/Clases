class Carro{
    constructor(marca,modelo){

    this.marca = marca;
    this.modelo = modelo;
    this.estado = 'fallando';
    }

    mostrarDetalle (){
        console.log(`Marca ${this.marca},Modelo ${this.modelo}, Estado: ${this.estado} `)
    }

    cambiarEstado(nuevoEstado){

        this.estado = nuevoEstado;
    }
}

class servicioMecanico {
    reparar(carro){
        console.log(`Reparando el ${carro.marca} ${carro.modelo}`)
        carro.cambiarEstado('reparado');
        console.log(`El ${this.carro.marca} ${this.marca} ha sido revisado y está ${carro.estado}.`);
    }
 }

 const miCarro = new Carro('Toyota', 'Hilux');

 const taller = new servicioMecanico();
 taller.reparar(miCarro); 


 miCarro.mostrarDetalle(); //Marca : toyota, modelo hilux, estado: reparado
