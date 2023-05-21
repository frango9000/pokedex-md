import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { appRoutes } from './app.routes';
import { AppComponent } from './core/components/app.component';
import { BottomBarComponent } from './core/components/bottom-bar.component';
import { SidenavComponent } from './core/components/sidenav.component';
import { ToolbarComponent } from './core/components/toolbar.component';
import { InitializationProvider } from './core/services/initialization.service';
import { TranslocoRootModule } from './core/transloco-root.module';
import { IsMobileModule } from './shared/modules/is-mobile';
import { NgLetModule } from './shared/modules/ng-let';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    IsMobileModule,
    NgLetModule,
    HttpClientModule,
    TranslocoRootModule,
    FormlyModule.forRoot(),
    MatDialogModule,
    SidenavComponent,
    ToolbarComponent,
    BottomBarComponent,
  ],
  providers: [InitializationProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
