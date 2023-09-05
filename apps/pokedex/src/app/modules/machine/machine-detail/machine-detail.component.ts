import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-machine-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.scss'],
})
export class MachineDetailComponent {}
