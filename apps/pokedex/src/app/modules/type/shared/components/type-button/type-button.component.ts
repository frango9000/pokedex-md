import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { TypeDetailService } from '../../../type-detail/type-detail.service';
import { TypeColorPipe } from '../../pipes/type-color.pipe';

@Component({
  selector: 'pokedex-type-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    TranslocoModule,
    TypeColorPipe,
    MatIconModule,
    MatRippleModule,
  ],
  providers: [TypeDetailService],
  templateUrl: './type-button.component.html',
  styleUrls: ['./type-button.component.scss'],
})
export class TypeButtonComponent {
  @Input() public types: string[] = [];
  @Input() public clickable = false;
  @Input() public fullWidth = false;
  @Input() public defending: boolean | undefined = false;
  @Input() public attacking: boolean | undefined = false;

  constructor(protected readonly typeDetailService: TypeDetailService) {}
}
