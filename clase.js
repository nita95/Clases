class Carro{
   /* constructor es un inicializador de las variable */
    constructor (marca, modelo)  {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;/* porque el carro esta detenido */
    }       

    arrancar (){
            /* se utiliza para hacer llamado de funciones estructuradas*/
            console.log(`${this.marca} {$this.modelo} ha arrancado`);/* en el signo $ puede llamar las variables del constructor */
    }
 
    detener(){
        this.velocidadActual = 0;
        console.log(`${this.marca} {$this.modelo} se ha detenido`);
    
    }

    acelerar (velocidad){
        this.velocidadActual += velocidad;
        console.log(`${this.marca} {$this.modelo} ha acelerado a ${this.velocidadActual}km/h`);
    }

    frenar(velocidad){
            this.velocidadActual -= velocidad;
            if(this.velocidadActual < 0){
                this.velocidadActual  = 0
            }
        console.log(`${this.marca} {$this.modelo}  ha frenado a ${this.velocidadActual} km/h`);
    }

}
    /* tenemos el objeto carro montado en la funcion   */

let miCarro = new Carro('Toyota','Corola');

miCarro.arrancar();


