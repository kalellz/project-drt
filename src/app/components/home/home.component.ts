import { Component } from '@angular/core';
import { InputComponent } from "../shared/input/input.component";
import { HeaderComponent } from "../shared/header/header.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [InputComponent, HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
