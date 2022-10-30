class Calculette {

    constructor(nombre1, nombre2) {
        if( !Number.isInteger(nombre1) || !Number.isInteger(nombre2) ){ throw "Une des variables n'est pas un nombre."}
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
    }

    additionner(){ console.log(this.nombre1+this.nombre2)}
    soustraire(){ console.log(this.nombre1-this.nombre2)}
    multiplier(){ console.log(this.nombre1*this.nombre2)}
    diviser(){ console.log(this.nombre1/this.nombre2)}
    modulo(){ console.log(this.nombre1%this.nombre2)}

}

//Début des tests

let calc = new Calculette(7, 7);

console.log("Addition :");
calc.additionner();
console.log("Multiplication :");
calc.multiplier();
console.log("Division :");
calc.diviser();
console.log("Modulo :");
calc.modulo();
