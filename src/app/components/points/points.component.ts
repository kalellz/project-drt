import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from "./filter/table/table.component";


@Component({
  selector: 'app-points',
  imports: [CommonModule, HeaderComponent, SidebarComponent, FilterComponent, TableComponent],
  templateUrl: './points.component.html',
  styleUrl: './points.component.scss'
})
export class PointsComponent {
  mostrarTexto = false;
  textoBotao = 'Bater Ponto';

  constructor(private router: Router) {}

  navigateAdd() {
    this.router.navigate(['/addpoints']);
  }

  onMouseEnter() {
    this.mostrarTexto = true;
  }

  onMouseLeave() {
    this.mostrarTexto = false;
  }
}
