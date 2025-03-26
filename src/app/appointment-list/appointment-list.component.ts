import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.caricaDati();
  }

  caricaDati() {
    const dati = localStorage.getItem('appuntamenti');
    this.appointments = dati ? JSON.parse(dati) : [];
  }

  eliminaAppuntamento(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appuntamenti', JSON.stringify(this.appointments));
  }

  vaiAdAggiunta() {
    this.router.navigate(['/aggiungi']);
  }
}
