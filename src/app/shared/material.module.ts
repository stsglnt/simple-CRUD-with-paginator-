import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule
  ],
})
export class MaterialModule { }
