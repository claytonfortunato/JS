import { somar } from "./sum.js";
import { sub } from "./sub.js";
import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js";
import Circulo from "./Circulo";

let s = sub(20,10)
console.log(s)

let m = somar (5,10)
console.log(m)

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(4));

console.log(numeroAleatorio());

console.log(Circulo.area(5));