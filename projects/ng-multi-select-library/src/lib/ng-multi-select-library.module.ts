import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectComponent } from './ng-multi-select-library.component';



@NgModule({
  declarations: [NgMultiSelectComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  exports: [NgMultiSelectComponent]
})
export class NgMultiSelectModule { }
