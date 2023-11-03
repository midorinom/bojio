import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DemoService } from './service/demo.service';
import { LandingComponent } from './pages/landing/landing.component';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DemoCrudComponent } from './pages/demo_crud/demo-crud.component';
import { LoginComponent } from './pages/landing/login/login.component';
import { RegisterComponent } from './pages/landing/register/register.component';
import { AccountService } from './service/account.service';
import { ProfileComponent } from './pages/landing/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        LandingComponent,
        DemoCrudComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        CommonModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CommonModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        DialogModule,
        FormsModule,
        RippleModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        RatingModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        DemoService, AccountService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
