import * as orcs from "./orcs.js";

var hulk = new orcs.creature("Hulk", 34, 9);

console.log("Méthode saySomething :")
hulk.saySomething("GRAOU !");

console.log("\nMéthode identity :")
hulk.identity();