import { Component } from '@angular/core';
import { InfosComponent } from "./infos/infos.component";


@Component({
  selector: 'app-add-point',
  imports: [InfosComponent],
  templateUrl: './add-point.component.html',
  styleUrl: './add-point.component.scss'
})
export class AddPointComponent {
}
