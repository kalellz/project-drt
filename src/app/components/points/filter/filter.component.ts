import { Component, Input, HostListener, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() values: number[] = []

  randomValue: string = ''; // Propriedade para armazenar o valor aleatório

  // Método para gerar um número aleatório entre 0 e 10
  private getRandomValue(): string {
    return Math.floor(Math.random() * 9 + 1).toString(); // Gera um número entre 1 e 10
  }

  // Método para definir o placeholder com base no tipo
  getPlaceholder(): string {
    return this.type === 'year' ? '2023' : `0${this.randomValue}`;
  }

  // Quando o componente é inicializado
  ngOnInit() {
    if (this.type !== 'year') {
      this.randomValue = this.getRandomValue(); // Gera o valor aleatório uma única vez
    }
  }
  index: number = 0;
  currentValue: number = this.values[this.index];

  private isDragging = false;
  private startY = 0;

  // Quando o usuário pressiona o mouse
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startY = event.clientY;
  }

  // Quando o usuário move o mouse enquanto segura o botão
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const deltaY = event.clientY - this.startY;
    
    // Se mover mais de 20px para cima, diminui o índice
    if (deltaY < -20) {
      this.changeValue(-1);
      this.startY = event.clientY; // Reseta a posição inicial
    }
    
    // Se mover mais de 20px para baixo, aumenta o índice
    else if (deltaY > 20) {
      this.changeValue(1);
      this.startY = event.clientY; // Reseta a posição inicial
    }
  }

  // Quando o usuário solta o mouse
  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  // Alterna os valores conforme o movimento
  private changeValue(direction: number) {
    this.index = (this.index + direction + this.values.length) % this.values.length;
    this.currentValue = this.values[this.index];
  }
}
