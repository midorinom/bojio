import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DemoService } from './service/demo.service';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        DemoService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
