import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AttendanceRecord {
  date: string;
  entry: string;
  exit: string;
  type: string;
  status: string;
  actions: string[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TableComponent {
  records: AttendanceRecord[] = [
    { date: 'Qua, 16 Out', entry: '07:30', exit: '????', type: 'Presencial', status: '● Em progresso...', actions: [] },
    { date: 'Ter, 15 Out', entry: '07:29', exit: '16:01', type: 'Presencial', status: '● Concluída', actions: [] },
    { date: 'Seg, 14 Out', entry: '08:15', exit: '16:00', type: 'Presencial', status: '● Atraso', actions: ['Justificar'] },
    { date: 'Sex, 11 Out', entry: '10:00', exit: '16:00', type: 'Presencial', status: '● Justificada', actions: ['Concluída'] },
    { date: 'Qui, 10 Out', entry: '????', exit: '????', type: 'Home Office', status: '● Pendente', actions: ['Justificar'] },
  ];

  sortedData: AttendanceRecord[] = this.records.slice();
  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    date: 'asc',
    type: 'asc',
    status: 'asc',
  };

  sortData(column: keyof AttendanceRecord) {
    const direction = this.sortDirection[column] === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = direction;

    this.sortedData = this.records.slice().sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return direction === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  getStatusClass(status: string): string {
    const statusKey = status.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return `status-${statusKey}`;
  }
}