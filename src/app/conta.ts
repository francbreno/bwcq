export class Conta {
    id: number;
    nome: string;
    descricao: string;
    saldo: number;
    
    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.saldo = 0;
    }
}
