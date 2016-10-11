import { Component, OnInit, Input }   from '@angular/core';
import { Router }                     from '@angular/router';

import { Conta }                      from '../conta'; 

@Component({
  selector: 'app-conta-card',
  templateUrl: './conta-card.component.html',
  styleUrls: ['./conta-card.component.css']
})
export class ContaCardComponent implements OnInit {
  @Input() conta: Conta;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  // Exibe o detalhamento da conta
  goToDetalhes(): void {
    let link = ['/contas', this.conta.id];
    this.router.navigate(link);
  }
}
