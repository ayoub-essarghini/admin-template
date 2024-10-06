import { Component } from '@angular/core';
import { SidebarserviceService } from '../sidebar/sidebarservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  iscCollapsed: boolean = false;

  isSideBarcollapsed = false;
  constructor(private sidebarService: SidebarserviceService) {
    
  }
  toggleSideBar()
  {
     this.sidebarService.toggleSidebar();  
      this.isSideBarcollapsed = !this.isSideBarcollapsed;
  }
  toggle() {
    this.iscCollapsed = !this.iscCollapsed;
  }
}
