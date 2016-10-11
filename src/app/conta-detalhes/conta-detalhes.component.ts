import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Conta }                    from '../conta';
import { ContaService }             from '../conta-service';

@Component({
  selector: 'app-conta-detalhes',
  templateUrl: './conta-detalhes.component.html',
  styleUrls: ['./conta-detalhes.component.css']
})
export class ContaDetalhesComponent implements OnInit {
  conta: Conta;

  constructor(private route: ActivatedRoute, private contaService: ContaService) {
   }

  ngOnInit(): void {
    let id: any;
    this.route.params.forEach((params: Params) => id = +params['id']);
    this.contaService.getConta(id).then(conta => this.conta = conta);
  }
}
