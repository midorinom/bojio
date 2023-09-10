import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoCrudComponent } from './demo-crud.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DemoCrudComponent }
    ])],
    exports: [RouterModule]
})
export class DemoCrudRoutingModule { }
