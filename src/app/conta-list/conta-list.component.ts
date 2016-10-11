import { Component, OnInit }  from '@angular/core';

import { Conta }              from '../conta';
import { ContaService }       from '../conta-service';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {
  contas: Conta[];

  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.contaService.getContas().then(contas => this.contas = contas);
  }
}
