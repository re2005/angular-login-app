import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthService} from './services/auth/auth.service';
import {RouteGuardService} from './services/route-guard/route-guard.service';
import {RegisterComponent} from './components/register/register.component';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {UserSelectorComponent} from './components/user-selector/user-selector.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {LogoffComponent} from './components/logoff/logoff.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent,
        UserSelectorComponent,
        LogoffComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        ScrollingModule,
        ScrollingModule,
        MatSelectModule,
        MatGridListModule,
        MatMenuModule
    ],
    providers: [
        RouteGuardService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
