import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importação necessária

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sideBarItems = [
    { title: 'Dashboard',     icon: 'images/dash.svg',  route: '/dashboard' },
    { title: 'Perfil',        icon: 'images/user.svg',     route: '/profile'   },
    { title: 'Configurações', icon: 'images/settings.svg',   route: '/settings'  },
    { title: 'Pontos',   icon: 'images/diploma.svg',     route: '/points'    },
    { title: 'Equipe', icon: 'images/team.svg',       route: '/team'      }
  ];
}
