import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DemoCrudComponent } from './pages/demo_crud/demo-crud.component';
import { LoginComponent } from './pages/landing/login/login.component';
import { RegisterComponent } from './pages/landing/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

// const routes: Routes = [];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    imports: [
        RouterModule.forRoot([
            { path: '', component: LandingComponent },
            { path: 'demo', component: DemoCrudComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'profile', component: ProfileComponent },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
