"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atividade01_1 = require("./atividade01");
const item = new atividade01_1.Item(20, 'bob', 'boneco');
const pedido = new atividade01_1.Pedido();
pedido.addItem(item);
console.log(`Valor Total: R$${pedido.getValorTotal.toFixed(2)}`);
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    desenhar() {
        console.log('desenhando...');
    }
    redimensionar() {
        console.log('redimensionando...');
    }
}
class Retangulo {
    constructor(comprimento, altura) {
        this.comprimento = comprimento;
        this.altura = altura;
    }
    desenhar() {
        console.log('desenhando...');
    }
    redimensionar() {
        console.log('redimensionando...');
    }
}
const bola = new Circulo(1000000);
bola.desenhar();
