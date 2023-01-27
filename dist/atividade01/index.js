"use strict";
/**
Público (+)
Privado (-)
Protegido (#)
Pacote (~)
Derivado (/)
Estático (sublinhado)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Pedido = void 0;
class Pedido {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }
    get getValorTotal() {
        return this.valorTotal;
    }
    addItem(item) {
        this.itens.push(item);
        console.log('item adicionado com sucesso');
        this.valorTotal += item.valor;
    }
}
exports.Pedido = Pedido;
class Item {
    constructor(valor, nome, descricao) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
}
exports.Item = Item;
