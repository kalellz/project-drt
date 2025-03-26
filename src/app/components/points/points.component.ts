import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from "./filter/table/table.component";
import { AddPointComponent } from "./add-point/add-point.component";


@Component({
  selector: 'app-points',
  imports: [CommonModule, HeaderComponent, SidebarComponent, FilterComponent, TableComponent, AddPointComponent],
  templateUrl: './points.component.html',
  styleUrl: './points.component.scss'
})
export class PointsComponent {
  mostrarTexto = false;
  textoBotao = 'Bater Ponto';
  mostrarAddPoint = false;

  showAddPoint() {
    this.mostrarAddPoint = !this.mostrarAddPoint;
  }
  
  onMouseEnter() {
    this.mostrarTexto = true;
  }

  onMouseLeave() {
    this.mostrarTexto = false;
  }
}
