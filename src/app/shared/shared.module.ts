import { NgModule } from '@angular/core';
import { MysignComponent } from './mysign.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [MysignComponent],
    providers: [],
    exports: [MysignComponent]
})
export class SharedModule { }
