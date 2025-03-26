import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infos',
  imports: [CommonModule],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
})
export class InfosComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() time: string = '';
  @Input() icon: string = '';
  @Input() dable!: boolean;
}
