import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { AddProgramComponent } from './programs/add-program/add-program.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    AddTripComponent,
    TripListComponent,
    AddProgramComponent,
    ProgramListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
