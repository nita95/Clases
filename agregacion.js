class Rueda{
    constructor(tipo,diametro){

        this.tipo = tipo;
        this.diametro = diametro;
    }

    mostrarDetalles(){
        console.log(`Rueda tipo ${this.tipo},Diametro ${this.diametro}`);
    }
}


class Carro{
    constructor (color,marca,modelo,numPuertas,ruedas){

        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numPuertas = numPuertas;
        
//agregacion con la clase ruedas
        this.ruedas = ruedas;
    }

    mostrarDetalles(){
        console.log(`carro ${this.marca}${this.modelo}, color ${this.color}, Numero de puertas ${this.numPuertas}`);

        this.ruedas.forEach((rueda, index) => {
            console.log(`Rueda ${index +1}: ${rueda.tipo}, Diametro: ${rueda.diametro} pulgadas`)
        });
    }
}

// instanciaro crear o llamar a las ruedas

const ruedaDelanteraIzquierda = new Rueda ('Verano', 18);
const ruedaDelanteraDerecha = new Rueda ('Verano', 18);
const ruedaTraseraIzquierda = new Rueda ('Invierno', 17);
const ruedaTraseraDerecha = new Rueda ('Invierno', 17);

// creamos la instancia de carro con la agregacion de las ruedas

const miCarro = new Carro('Negro', 'Audi', 'A4', 5,[ruedaDelanteraIzquierda,ruedaDelanteraDerecha,ruedaTraseraIzquierda,ruedaTraseraDerecha]);

miCarro.mostrarDetalles();
