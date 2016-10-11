import { Component, OnInit, Input }  from '@angular/core';

import { Conta }              from '../conta'; 

@Component({
  selector: 'app-conta-card',
  templateUrl: './conta-card.component.html',
  styleUrls: ['./conta-card.component.css']
})
export class ContaCardComponent implements OnInit {
  @Input() conta: Conta;

  constructor() {}

  ngOnInit() {
  }

}
