import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { ContaListComponent }     from './conta-list/conta-list.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { ContaDetalhesComponent } from './conta-detalhes/conta-detalhes.component';
import { ContaFormComponent }     from './conta-form/conta-form.component';


const routes: Routes = [
  { path: 'contas', component: ContaListComponent },
  { path: 'contas/:id', component: ContaDetalhesComponent },
  { path: 'contas/new', component: ContaFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
