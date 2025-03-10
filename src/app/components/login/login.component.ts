import { Component } from '@angular/core';
import { InputComponent } from "./input/input.component";

@Component({
  selector: 'app-login',
  imports: [InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
