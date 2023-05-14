import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';
import { TypeColorPipe } from './type-color.pipe';

@Component({
  selector: 'pokedex-type-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TranslocoModule, TypeColorPipe],
  templateUrl: './type-button.component.html',
  styleUrls: ['./type-button.component.scss'],
})
export class TypeButtonComponent {
  @Input() public types: string[] = [];
}
