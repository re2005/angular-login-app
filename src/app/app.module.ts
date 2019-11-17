import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthService} from './services/auth/auth.service';
import {RouteGuardService} from './services/route-guard/route-guard.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        RouteGuardService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
