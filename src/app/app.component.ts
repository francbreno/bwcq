import { Component }  from '@angular/core';
import { Router }     from '@angular/router'; 

import { Conta }      from './conta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'BWCQ';

  constructor(private router: Router) {}

  goToNewConta() {
    let link = ['/contas/new'];
    this.router.navigate(link);
  }
}
