import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode, NgModule, inject } from '@angular/core';
import { provideTransloco, Translation, TranslocoLoader, TranslocoModule } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private readonly http = inject(HttpClient);
  private readonly baseHref = inject(APP_BASE_HREF);

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
