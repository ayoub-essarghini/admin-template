import { Component } from '@angular/core';
import { SidebarserviceService } from './sidebarservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarserviceService) {}
  isSubmenuOpen: string | null = null;

  isSideBarOpen : boolean = true;

  logoPath: string = 'assets/images/logo.png';

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isSideBarOpen = isOpen;
    });
  }
  toggleSubmenu(menu: string) {
    this.isSubmenuOpen = this.isSubmenuOpen === menu ? null : menu;
  }
}
