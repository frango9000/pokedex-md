import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _darkMode$ = new BehaviorSubject<boolean>(false);

  get darkMode$(): BehaviorSubject<boolean> {
    return this._darkMode$;
  }

  get darkMode(): boolean {
    return this._darkMode$.value;
  }

  set darkMode(value: boolean) {
    this._darkMode$.next(value);
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
