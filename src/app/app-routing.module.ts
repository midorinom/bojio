import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DemoCrudComponent } from './pages/demo_crud/demo-crud.component';
import { LoginComponent } from './pages/landing/login/login.component';
import { RegisterComponent } from './pages/landing/register/register.component';
import { ProfileComponent } from './pages/landing/profile/profile.component';
import { mustLoginGuard, mustLoggedOutGuard, bothOKGuard } from './service/route-guard.service';

// const routes: Routes = [];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    imports: [
        RouterModule.forRoot([
            { path: '', component: LandingComponent, canActivate: [bothOKGuard] },
            { path: 'demo', component: DemoCrudComponent, canActivate: [bothOKGuard] },
            { path: 'login', component: LoginComponent, canActivate: [mustLoggedOutGuard] },
            { path: 'register', component: RegisterComponent, canActivate: [mustLoggedOutGuard] },
            { path: 'profile', component: ProfileComponent, canActivate: [mustLoginGuard] },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
