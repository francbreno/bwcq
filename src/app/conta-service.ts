import { Injectable } from '@angular/core';

import { Conta }      from './conta';
import { CONTAS }     from './mock-contas';

@Injectable()
export class ContaService {

  constructor() { }

  getContas(): Promise<Conta[]> {
    return Promise.resolve(CONTAS);
  }

  getConta(id: number): Promise<Conta> {
    return this.getContas().then(contas => contas.find(conta => conta.id === id));
  }

  getContaMaiorSaldo(): Promise<Conta> {
    return Promise.resolve(this.getContas()
      .then(contas => {
        contas.sort((c1, c2) => c1.saldo - c2.saldo).reverse();
        return contas[0];
      }));
  }

  getContaMenorSaldo() {

  }

  getContaMaiorEsperado() {

  }

  getContaMaiorRealizado() {

  }
}
