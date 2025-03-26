import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>➕ Nuovo Appuntamento</h2>
    <form (ngSubmit)="salva()" #form="ngForm">
      <label>Titolo:
        <input [(ngModel)]="nuovo.titolo" name="titolo" required />
      </label><br />
      <label>Data:
        <input [(ngModel)]="nuovo.data" name="data" type="date" required />
      </label><br />
      <label>Ora:
        <input [(ngModel)]="nuovo.ora" name="ora" type="time" required />
      </label><br />
      <label>Luogo:
        <input [(ngModel)]="nuovo.luogo" name="luogo" required />
      </label><br /><br />
      <button type="submit">💾 Salva</button>
    </form>
    <br />
    <button (click)="indietro()">⬅️ Torna alla lista</button>
  `
})
export class AddAppointmentComponent {
  nuovo = {
    titolo: '',
    data: '',
    ora: '',
    luogo: ''
  };

  constructor(private router: Router) {}

  salva() {
    const lista = JSON.parse(localStorage.getItem('appuntamenti') || '[]');
    lista.push(this.nuovo);
    localStorage.setItem('appuntamenti', JSON.stringify(lista));
    this.router.navigate(['/']);
  }

  indietro() {
    this.router.navigate(['/']);
  }
}
