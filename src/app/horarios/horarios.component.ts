import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})

export class HorariosComponent {
  horarioData: string = '';
  horarioHora: string = '';
  horarioNome: string = '';
  horarioTelefone: string = '';
  horarioBarbeiro: string = '';

  barbeiros = ['Adriano Rodrigues', 'Hiago Agostinho', 'Cleilton Rocha'];

  submitForm() {
    console.log('Agendamento:', this.horarioNome, this.horarioTelefone, this.horarioData, this.horarioHora, this.horarioBarbeiro);
  }
}