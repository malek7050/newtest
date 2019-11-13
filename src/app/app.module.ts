import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { MeubleComponent } from './projet/meuble/meuble.component';
import { MeubleListComponent } from './projet/meuble-list/meuble-list.component';
import { MeubleList1Component } from './projet2/meuble-list1/meuble-list1.component';
import { Meuble1Component } from './projet2/meuble1/meuble1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    MeubleComponent,
    MeubleListComponent,
    MeubleList1Component,
    Meuble1Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
