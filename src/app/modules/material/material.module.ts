import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
