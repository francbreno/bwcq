import { Component }  from '@angular/core';

import { Conta }      from './conta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contas: Conta[] = [
    new Conta('Moradia', 'Despesas com aluguel, condomínio, energia elétrica, etc'),
    new Conta('Saúde', 'Despesas com plano, consultas, medicamentos, etc')
  ];
}
