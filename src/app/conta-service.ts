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
    var contasOrdenadas = this.getContas().then(contas => { 
      contas.sort((contaA, contaB): number => contaA.saldo - contaB.saldo)
      return contas;
    });
  
    return Promise.resolve(contasOrdenadas[0]);
  }
}
