import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { EditorDeDisciplinaComponent } from './editor-de-disciplina/editor-de-disciplina.component';
import { PrecisaG2Component } from './precisa-g2/precisa-g2.component';
import { ControleFaltasComponent } from './controle-faltas/controle-faltas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent,
    EditorDeDisciplinaComponent,
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
