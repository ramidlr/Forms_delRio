import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveformComponent
  ]
})
export class FormModule { }