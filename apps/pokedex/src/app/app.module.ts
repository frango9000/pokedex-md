import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './core/components/app.component';
import { BottomBarComponent } from './core/components/bottom-bar.component';
import { SidenavComponent } from './core/components/sidenav.component';
import { ToolbarComponent } from './core/components/toolbar.component';
import { IsMobileModule } from './shared/modules/is-mobile';
import { NgLetModule } from './shared/modules/ng-let';

@NgModule({
  declarations: [AppComponent, SidenavComponent, ToolbarComponent, BottomBarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBottomSheetModule,
    IsMobileModule,
    NgLetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
