import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material components */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
/* End Angular Material components */

import { APP_ROUTING } from './app.routes';

/* Custom components */
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
/* End Custom components */

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    ChatComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
