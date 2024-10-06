import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { AddProgramComponent } from './programs/add-program/add-program.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Dashboard route
  { path: 'add-trip', component: AddTripComponent }, // Add Trip route
  { path: 'trip-list', component: TripListComponent }, // Trip List route
  { path: 'add-program', component: AddProgramComponent }, // Add Program route
  { path: 'program-list', component: ProgramListComponent } // Program List route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
