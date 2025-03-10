import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'; // Importe o Router
import { filter } from 'rxjs/operators'; // Importe o operador filter do RxJS


@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selectedItem: string = '/';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  sideBarItems = [
    { title: 'Dashboard',     icon: 'images/dash.svg',  route: '/' },
    { title: 'Perfil',        icon: 'images/user.svg',     route: '/profile'   },
    { title: 'Configurações', icon: 'images/settings.svg',   route: '/settings'  },
    { title: 'Pontos',   icon: 'images/diploma.svg',     route: '/points'    },
    { title: 'Equipe', icon: 'images/team.svg',       route: '/team'      }
  ];
  ngOnInit() {
    // Atualiza o selectedItem com base na rota atual ao carregar o componente
    this.selectedItem = this.router.url;

    // Observa as mudanças de rota e atualiza o selectedItem
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd) // Filtra apenas eventos de NavigationEnd
      )
      .subscribe((event: NavigationEnd) => {
        this.selectedItem = event.url; // Atualiza o selectedItem com a rota atual
      });
  }

  setActive(route: string) {
    this.selectedItem = route; // Define o item selecionado
    this.router.navigate([route]); // Navega para a rota
  }
}
