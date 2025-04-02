import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSearchVisible = false;

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }
  userStatus: 'online' | 'offline' = 'online'; // Alterne entre 'online' e 'offline'
  bellStatus: 'have' | 'dhave' = 'have'; // Alterne entre 'online' e 'offline'
}
