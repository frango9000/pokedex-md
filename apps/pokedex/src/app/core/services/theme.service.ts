import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private static readonly STORAGE_KEY = 'dark-mode';

  private readonly _darkMode$ = new BehaviorSubject<boolean>(localStorage.getItem(ThemeService.STORAGE_KEY) === 'true');

  get darkMode$(): BehaviorSubject<boolean> {
    return this._darkMode$;
  }

  get darkMode(): boolean {
    return this._darkMode$.value;
  }

  set darkMode(value: boolean) {
    localStorage.setItem(ThemeService.STORAGE_KEY, String(value));
    this._darkMode$.next(value);
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
