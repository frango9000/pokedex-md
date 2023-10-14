import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, isDevMode, NgModule } from '@angular/core';
import { provideTransloco, Translation, TranslocoLoader, TranslocoModule } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(
    private readonly http: HttpClient,
    @Inject(APP_BASE_HREF) private readonly baseHref: string,
  ) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`${this.baseHref}assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['en', 'es', 'ja-Hrkt', 'roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'it'],
        defaultLang: 'en',
        fallbackLang: 'en',
        missingHandler: {
          logMissingKey: false,
          useFallbackTranslation: true,
        },
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
  ],
})
export class TranslocoRootModule {}
