import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { provideFormlyCore } from '@ngx-formly/core';
import { withFormlyMaterial } from '@ngx-formly/material';
import { appRoutes } from './app.routes';
import { InitializationService } from './core/services/initialization.service';
import { translocoOptions } from './core/transloco.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    provideTransloco(translocoOptions),
    provideFormlyCore(withFormlyMaterial()),
    provideAppInitializer(() => inject(InitializationService).initialize()),
  ],
};
