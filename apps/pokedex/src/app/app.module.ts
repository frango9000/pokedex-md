import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { appRoutes } from './app.routes';
import { AppComponent } from './core/components/app.component';
import { InitializationProvider } from './core/services/initialization.service';
import { TranslocoRootModule } from './core/transloco-root.module';

/**
 * Angular 21 Standalone Application Configuration
 * This module serves as the root configuration for the application.
 * All providers are centralized here for better tree-shaking and performance.
 */
@NgModule({
  imports: [AppComponent, TranslocoRootModule, FormlyModule.forRoot()],
  providers: [
    InitializationProvider,
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
