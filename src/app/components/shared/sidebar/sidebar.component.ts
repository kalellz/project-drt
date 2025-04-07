import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  selectedItem: string = '/';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  sideBarItems = [
    { title: 'Dashboard',     icon: 'images/dash.svg',  route: '/' },
    { title: 'Equipe',        icon: 'images/team.svg',  route: '/team' },
    { title: 'Pontos',        icon: 'images/points.svg', route: '/points' },
    { title: 'Configurações', icon: 'images/settings.svg', route: '/settings' }
  ];

  ngOnInit() {
    this.selectedItem = this.router.url;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.selectedItem = event.url;
    });
  }

  setActive(route: string) {
    this.selectedItem = route;
    this.router.navigate([route]);
  }
}
