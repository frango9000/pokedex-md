import { Injectable } from '@angular/core';
import { Language, PxLanguage } from '@pokedex-md/domain';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TranslatedService } from '../../api/base.service';
import { MergingMap } from '../../shared/utils/merge-map';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends TranslatedService<Language, PxLanguage> {
  private static readonly STORAGE_KEY = 'active-language';
  private readonly DEFAULT_LANGUAGE: PxLanguage = { name: 'en', id: 9, iso3166: 'us', names: {} };
  private readonly _activeLanguage$ = new BehaviorSubject<PxLanguage>(this.DEFAULT_LANGUAGE);

  get name(): string {
    return 'language';
  }

  override initialize(): Observable<PxLanguage[]> {
    return super.initialize().pipe(
      tap((languages) => {
        if (!languages?.length) return;
        const savedName = localStorage.getItem(LanguageService.STORAGE_KEY);
        const restored = savedName ? languages.find((l) => l.name === savedName) : undefined;
        const language = restored ?? languages.find((l) => l.name === this.DEFAULT_LANGUAGE.name) ?? languages[0];
        this.translocoService.setActiveLang(language.name);
        this._activeLanguage$.next(language);
      }),
    );
  }

  get activeLanguage$(): Observable<PxLanguage> {
    return this._activeLanguage$.asObservable();
  }

  get activeLanguageName$(): Observable<string> {
    return this._activeLanguage$.pipe(map((lang) => lang.name));
  }

  set activeLanguage(selectedLanguage: string) {
    const language: PxLanguage | undefined = this.resources$.value.find((value) => value.name === selectedLanguage);
    if (language) {
      localStorage.setItem(LanguageService.STORAGE_KEY, language.name);
      this.translocoService.setActiveLang(language.name);
      this._activeLanguage$.next(language);
    }
  }

  refresh() {
    this.activeLanguage = this._activeLanguage$.value.name;
  }

  protected override _parseAllTranslations(resources: PxLanguage[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (language, localized) => {
        return {
          LANGUAGE: { [language.name]: { NAME: localized } },
        };
      }),
    );
  }
}
