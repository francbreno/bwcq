import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router'; 

import { Conta }              from '../conta';
import { ContaService }       from '../conta-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private contaService: ContaService) {}

  ngOnInit() {
  }

  goToListaContas() {
    let link = ['/contas'];
    this.router.navigate(link);
  }

  getContaMaiorSaldo() {
    return null;//this.contaService.getContaMaiorSaldo().then(conta => {return conta});
  }
}
