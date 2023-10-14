import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LandingComponent } from './pages/landing/landing.component';
import { DemoCrudComponent } from './pages/demo_crud/demo-crud.component';

// const routes: Routes = [];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    imports: [
        RouterModule.forRoot([
            { path: '', component: LandingComponent },
            { path: 'demo', component: DemoCrudComponent },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
