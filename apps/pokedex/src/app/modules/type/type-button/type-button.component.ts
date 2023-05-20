import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { TypeDetailService } from '../type-detail/type-detail.service';
import { TypeColorPipe } from './type-color.pipe';

@Component({
  selector: 'pokedex-type-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, TranslocoModule, TypeColorPipe],
  providers: [TypeDetailService],
  templateUrl: './type-button.component.html',
  styleUrls: ['./type-button.component.scss'],
})
export class TypeButtonComponent {
  @Input() public types: string[] = [];

  constructor(protected readonly typeDetailService: TypeDetailService) {}
}
