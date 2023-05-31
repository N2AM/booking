import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckInComponent } from './check-in/check-in.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorDisplayComponent } from 'src/app/error-handling/error-display/error-display.component';
import { GraphQLModule } from 'src/app/graphql.module';




@NgModule({
  declarations: [
    CheckInComponent,
  ],
  imports: [
    CommonModule,
    CheckInRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ErrorDisplayComponent,
    GraphQLModule
  ],
})
export class CheckInModule { }
