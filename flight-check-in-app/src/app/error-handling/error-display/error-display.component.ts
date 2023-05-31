import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ErrorModel } from '../models/error.model';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-error-display',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent {

  @Input({ required: true }) errorMessage!: string;

  constructor(public dialogRef: MatDialogRef<ErrorDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorModel) {

  }

}
