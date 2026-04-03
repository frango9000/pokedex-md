import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { inject, NgModule, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFormlyCore } from '@ngx-formly/core';
import { withFormlyMaterial } from '@ngx-formly/material';
import { appRoutes } from './app.routes';
import { AppComponent } from './core/components/app.component';
import { InitializationService } from './core/services/initialization.service';
import { TranslocoRootModule } from './core/transloco-root.module';

/**
 * Angular 21 Standalone Application Configuration
 * This module serves as the root configuration for the application.
 * All providers are centralized here for better tree-shaking and performance.
 */
@NgModule({
  imports: [AppComponent, TranslocoRootModule],
  providers: [
    provideAppInitializer(() => inject(InitializationService).initialize()),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    provideFormlyCore(withFormlyMaterial()),
  ],
})
export class AppModule {}
