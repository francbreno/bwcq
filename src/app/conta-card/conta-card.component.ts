import { Component, OnInit }  from '@angular/core';

import { Conta }              from '../conta'; 

@Component({
  selector: 'app-conta-card',
  templateUrl: './conta-card.component.html',
  styleUrls: ['./conta-card.component.css']
})
export class ContaCardComponent implements OnInit {
  conta: Conta;

  constructor() { 
    this.conta = new Conta('Moradia', 'Despesas com aluguel, condomínio, energia elétrica, etc');
  }

  ngOnInit() {
  }

}
