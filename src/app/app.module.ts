import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { PrecisaG2Component } from './precisa-g2/precisa-g2.component';
import { ControleFaltasComponent } from './controle-faltas/controle-faltas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrecisaG2Component,
    ControleFaltasComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
