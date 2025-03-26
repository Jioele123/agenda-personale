import { Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddAppointmentComponent } from './add-appointment.component';


export const routes: Routes = [
  { path: '', component: AppointmentListComponent },
  { path: 'aggiungi', component: AddAppointmentComponent }
];
