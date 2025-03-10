import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selectedItem: string = '/';

  setActive(route: string) {
    this.selectedItem = route;
  }

  sideBarItems = [
    { title: 'Dashboard',     icon: 'images/dash.svg',  route: '/' },
    { title: 'Perfil',        icon: 'images/user.svg',     route: '/profile'   },
    { title: 'Configurações', icon: 'images/settings.svg',   route: '/settings'  },
    { title: 'Pontos',   icon: 'images/diploma.svg',     route: '/points'    },
    { title: 'Equipe', icon: 'images/team.svg',       route: '/team'      }
  ];
}
