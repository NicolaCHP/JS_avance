class creature{
    constructor( name, age, strength){
        this.name = name;
        this.age = age;
        this.strength = strength;
    }

    saySomething(words){ console.log( 'Creature : '+words)}
    identity(){ console.log("name : "+this.name+"\nage : "+this.age+"\nstrength : "+this.strength)}
}

class orc extends creature{
    scream(words){console.log( 'Orc : '+words.toUpperCase())}
    bite(someone){console.log( "L'orc "+this.name+" a mordu "+someone+" !")}
}

class urukhai extends orc{
    constructor(name,  strength){
        super(name, "non définit", strength+10);
    }

    kill(someone){console.log( "L'urukhai "+this.name+" a tué "+someone+" !")}

}

class chiefOrc extends orc{
    constructor(name, age, strength, isChief=true){  
        super(name, age, strength+2, isChief = true);
    }

    giveOrder(someone){console.log( "Le chef orc "+this.name+" a donné un ordre à "+someone+" !")}
}


export default {creature, orc, urukhai, chiefOrc}

//Test de creature :
var hulk = new creature("Hulk", 34, 9);

console.log("Méthode saySomething :")
hulk.saySomething("GRAOU !");

console.log("\nMéthode identity :")
hulk.identity();

//Test de Orc :

var Azog = new orc("Azog", 18, 6);

console.log("\nTest de l'orc Azog\n")
console.log("Méthode saySomething :")
Azog.saySomething("je suis oRc !");

console.log("\nMéthode identity :")
Azog.identity();

console.log("\nMéthode scream :")
Azog.scream("je suis oRc !");

console.log("\nMéthode bite :")
Azog.bite("Hulk");

//Test de Urukhai :

var Apa = new urukhai("apa", 6);

console.log("\nTest de l'urukhai Apa\n")

console.log("\nMéthode identity :")
Apa.identity();

console.log("\nMéthode scream :")
Apa.scream("je suis oRc !");

console.log("\nMéthode bite :")
Apa.bite("Hulk");

console.log("\nMéthode Kill :")
Apa.kill("Hulk");

//Test du chef orc :

var Apa = new chiefOrc("Opo", 6, 8, true);

console.log("\nTest du chef orc opo\n")

console.log("\nMéthode identity :")
Apa.identity();

console.log("\nMéthode scream :")
Apa.scream("je suis oRc !");

console.log("\nMéthode bite :")
Apa.bite("Hulk");

console.log("\nMéthode giveOrder :")
Apa.giveOrder("Hulk");