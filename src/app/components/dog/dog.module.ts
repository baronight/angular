import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { ShibaComponent } from './shiba/shiba.component';
import { DogService } from 'src/app/services/dog.service';
import { ShibaService } from 'src/app/services/shiba.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DogListComponent,
    ShibaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    DogService,
    ShibaService,
  ]
})
export class DogModule { }
