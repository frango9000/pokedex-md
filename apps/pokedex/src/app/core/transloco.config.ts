import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { TranslocoLoader, TranslocoOptions } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private readonly http = inject(HttpClient);

  getTranslation(lang: string) {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
}

export const translocoOptions: TranslocoOptions = {
  config: {
    availableLangs: ['en', 'es', 'ja-Hrkt', 'roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'it'],
    defaultLang: 'en',
    fallbackLang: 'en',
    missingHandler: {
      logMissingKey: true,
      useFallbackTranslation: true,
      allowEmpty: true,
    },
    reRenderOnLangChange: true,
    prodMode: !isDevMode(),
  },
  loader: TranslocoHttpLoader,
};
