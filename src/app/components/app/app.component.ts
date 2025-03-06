import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Importação necessária

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Necessário para usar imports diretamente no componente
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ProjectDRT';
}
