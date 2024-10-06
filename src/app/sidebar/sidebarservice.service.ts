import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarserviceService {

  private sidebarOpenSource = new BehaviorSubject<boolean>(true);
  sidebarOpen$ = this.sidebarOpenSource.asObservable();

  toggleSidebar() {
    this.sidebarOpenSource.next(!this.sidebarOpenSource.value);
  }

  setSidebarOpen(isOpen: boolean) {
    this.sidebarOpenSource.next(isOpen);
  }
}
