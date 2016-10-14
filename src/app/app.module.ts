import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { MaterialModule }         from '@angular/material';
import { RouterModule, Routes }   from '@angular/router'; 

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';
import { ContaCardComponent }     from './conta-card/conta-card.component';
import { ContaListComponent }     from './conta-list/conta-list.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { ContaDetalhesComponent } from './conta-detalhes/conta-detalhes.component';

import { ContaService }           from './conta-service';
import { ContaFormComponent }     from './conta-form/conta-form.component';

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
    AppRoutingModule],
  providers: [ContaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
