import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent }   from './app.component';
import { ContaCardComponent } from './conta-card/conta-card.component';
import { ContaListComponent } from './conta-list/conta-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaCardComponent,
    ContaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
