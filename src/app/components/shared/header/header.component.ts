import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSearchVisible = false;

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }
  userStatus: 'online' | 'offline' = 'online'; // Alterne entre 'online' e 'offline
  bellStatus: 'have' | 'dhave' = 'have'; // Alterne entre 'online' e 'offline
}
