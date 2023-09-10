import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoCrudRoutingModule } from './demo-crud-routing.module';
import { DemoCrudComponent } from './demo-crud.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClassModule } from 'primeng/styleclass';
import { RatingModule } from 'primeng/rating';

@NgModule({
    imports: [
        CommonModule,
        DemoCrudRoutingModule,
        DividerModule,
        ButtonModule,
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
        StyleClassModule,
        RatingModule
    ],
    declarations: [DemoCrudComponent]
})
export class DemoCrudModule { }
