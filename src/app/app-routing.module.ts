import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DemoCrudComponent } from './pages/demo_crud/demo-crud.component';
import { LoginComponent } from './pages/landing/login/login.component';
import { RegisterComponent } from './pages/landing/register/register.component';
import { ProfileComponent } from './pages/landing/profile/profile.component';
import { EventComponent } from './pages/events/event.component';
import { CreateEventComponent } from './pages/events/create/create-event.component';
import { EditEventComponent } from './pages/events/edit/edit-event.component';

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
            { path: 'event', component: EventComponent },
            { path: 'event/create', component: CreateEventComponent },
            { path: 'event/edit', component: EditEventComponent },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
