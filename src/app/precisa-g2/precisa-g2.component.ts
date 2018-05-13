import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-precisa-g2',
  templateUrl: './precisa-g2.component.html',
  styleUrls: ['./precisa-g2.component.css']
})
export class PrecisaG2Component implements OnInit {
    @Input()
    notaG1: number = null;

    resultado = null;

    constructor() { }

  ngOnInit() {
      if (typeof this.notaG1 === 'number') {
          const precisaG2 = (18 - this.notaG1) / 2;
          this.resultado = ' Eae garotão(ona), está preparado para tirar ' + precisaG2 + ' na G2?';
      }
      else{
          alert('Caro desenvolvedor, insira apenas números no componente!');
      }
  }

}
