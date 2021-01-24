import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component'
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component'
import { ChatComponent } from './pages/chat/chat.component'
import { LoginComponent } from './pages/auth/login/login.component'


const APP_ROUTES: Routes = [
    { path : 'chat', component: ChatComponent },
    { path : 'reset-password', component: ResetPasswordComponent },
    { path : 'forgot-password', component: ForgotPasswordComponent },
    { path : 'login', component: LoginComponent },
    { path : '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
