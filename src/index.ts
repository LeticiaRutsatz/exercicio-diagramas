

class Pedido{
    itens: Array<Item>;
    private valorTotal: number;

    constructor(){
        this.itens = [];
        this.valorTotal = 0;
    }

    get getValorTotal(){
       return this.valorTotal
    }

    addItem(item: Item){
        this.itens.push(item);
        console.log('item adicionado com sucesso')
        this.valorTotal += item.valor
    }
}

class Item{
    valor: number;
    nome: string;
    descricao: string;

    constructor(valor: number, nome: string, descricao: string){
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
}

const item = new Item(20,'bob','boneco');
const pedido = new Pedido();
pedido.addItem(item);

console.log(`Valor Total: R$${pedido.getValorTotal.toFixed(2)}`)



////////////////////////////////////////////////////////////////////////////




interface FormatoDeElemento{
    desenhar() : void
    redimensionar() : void
}

class Circulo implements FormatoDeElemento {
    raio : number

    constructor(raio : number){
        this.raio = raio
    }

    desenhar(){
        console.log('desenhando...');
    }

    redimensionar(){
        console.log('redimensionando...');
    }
}

class Retangulo implements FormatoDeElemento {
    comprimento : number
    altura: number

    constructor(comprimento : number, altura: number){
        this.comprimento = comprimento
        this.altura = altura
    }

    desenhar(){
        console.log('desenhando...');
    }

    redimensionar(){
        console.log('redimensionando...');
    }
}

const bola = new Circulo(1000000)

bola.desenhar()
