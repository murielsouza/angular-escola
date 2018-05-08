import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-precisa-g2',
  templateUrl: './precisa-g2.component.html',
  styleUrls: ['./precisa-g2.component.css']
})
export class PrecisaG2Component implements OnInit {
    @Input()
    notaG1: number = null;

    constructor() { }

  ngOnInit() {
    const precisaG2 = (18 - this.notaG1) / 2;
    alert(precisaG2);
  }

}
