import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-controle-faltas',
  templateUrl: './controle-faltas.component.html',
  styleUrls: ['./controle-faltas.component.css']
})
export class ControleFaltasComponent implements OnInit {
    @Input()
    totalFaltas: number = null;
    resultado = null;

    constructor() { }

    ngOnInit() {
        if (typeof this.totalFaltas === 'number') {
            const horas = this.totalFaltas * 3 + 11;
            if(horas <= 17){
                this.resultado = 'Você já faltou ' + horas + 'h, (cuidado, o limite é de 17h/semestre)';
            }
            else if(horas> 17 && horas <= 28){
                this.resultado = 'Você faltou +17 horas, faça as WEB Atividade. Horas já faltadas (' + horas + 'h)';
            }
            else{
                this.resultado = 'Você reprovou por faltas, FALTE MENOS no próximo semestre! Boa Sorte 🍀';
            }
         }
         else{
            alert('Caro desenvolvedor, insira apenas números no componente!');
        }
    }

}

