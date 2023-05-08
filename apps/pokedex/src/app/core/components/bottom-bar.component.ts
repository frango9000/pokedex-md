import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'pokedex-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent {
  constructor(protected readonly _bottomSheetRef: MatBottomSheetRef<BottomBarComponent>) {}
}
