import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetoWebAtendimento');
  
  atendimento_prioritario: string[]= []
  atendimento_geral: string[]= []
  atendimento_exame: string[]= []

  adicionar_fila_espera(nome: string, idade: string, gestante: string, deficiente: string, exames: string){
    
    if (idade >= 60 || idade <= 10 || gestante == 'true' || deficiente == 'true'){
      this.atendimento_prioritario.push(nome);
      console.log(this.atendimento_prioritario);
    }
    else if (exames == 'true' && idade > 10 && idade < 60 && gestante == 'false' && deficiente == 'false'){
      this.atendimento_exame.push(nome);
      console.log(this.atendimento_exame)
    }
    else{
      this.atendimento_geral.push(nome)
      console.log(this.atendimento_geral)
    }
} 

  
}


