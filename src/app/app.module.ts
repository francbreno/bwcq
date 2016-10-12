import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { MaterialModule }         from '@angular/material';
import { RouterModule, Routes }           from '@angular/router'; 

import { AppComponent }           from './app.component';
import { ContaCardComponent }     from './conta-card/conta-card.component';
import { ContaListComponent }     from './conta-list/conta-list.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { ContaDetalhesComponent } from './conta-detalhes/conta-detalhes.component';

import { ContaService }           from './conta-service';
import { ContaFormComponent } from './conta-form/conta-form.component';

const routes: Routes = [
  { path: 'contas', component: ContaListComponent },
  { path: 'contas/:id', component: ContaDetalhesComponent },
  { path: 'contas/new', component: ContaFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContaCardComponent,
    ContaListComponent,
    DashboardComponent,
    ContaDetalhesComponent,
    ContaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
