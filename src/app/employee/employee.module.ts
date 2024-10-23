import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSearchComponent } from '../employee-search/employee-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [EmployeeSearchComponent],
  imports: [
    CommonModule
    ,HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,   
  ]
})
export class EmployeeModule { }
