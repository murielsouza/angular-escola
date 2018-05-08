import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-controle-faltas',
  templateUrl: './controle-faltas.component.html',
  styleUrls: ['./controle-faltas.component.css']
})
export class ControleFaltasComponent implements OnInit {
    @Input()
    totalAulas: number = null;
    @Input()
    totalFaltas: number = null;

    constructor() { }

    ngOnInit() {
        const horas = this.totalFaltas * 3 + 11;
    }

}

