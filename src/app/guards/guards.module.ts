import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInGuard } from './logged-in.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoggedInGuard,
  ]
})
export class GuardsModule { }
