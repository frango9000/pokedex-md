import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './core/components/app.component';
import { SidenavComponent } from './core/components/sidenav.component';
import { ToolbarComponent } from './core/components/toolbar.component';
import { IsMobileModule } from './shared/modules/is-mobile';
import { NgLetModule } from './shared/modules/ng-let';

@NgModule({
  declarations: [AppComponent, SidenavComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    IsMobileModule,
    NgLetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
