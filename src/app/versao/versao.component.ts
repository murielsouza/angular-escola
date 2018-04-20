import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-versao',
  templateUrl: './versao.component.html',
  styleUrls: ['./versao.component.css']
})
export class VersaoComponent implements OnInit {
    @Input()
    versao_maior: string = null;

    @Input()
    versao_funcionalidade: string = null;

    @Input()
    versao_menor: string = null;

    versao_completa = null;
    constructor() { }

    ngOnInit() {
        if(parseInt(this.versao_funcionalidade)<0 || parseInt(this.versao_funcionalidade)>10){
            alert("Versão incorreta! Número de versão funcionalidade incompatível");
        }
        else if (parseInt(this.versao_menor)<0 || parseInt(this.versao_menor)>100){
            alert("Versão incorreta! Número de versão menor incompatível")
        }
        else{
            this.versao_completa = this.versao_maior + "." + this.versao_funcionalidade + "." + this.versao_menor;
        }
    }

}
