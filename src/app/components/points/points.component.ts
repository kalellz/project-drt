import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-points',
  imports: [HeaderComponent, SidebarComponent, FilterComponent],
  templateUrl: './points.component.html',
  styleUrl: './points.component.scss'
})
export class PointsComponent {

}
