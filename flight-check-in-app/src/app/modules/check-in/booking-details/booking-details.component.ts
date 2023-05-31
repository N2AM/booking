import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BookingDetails } from '../models/booking-details.model';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatExpansionModule],
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})

export class BookingDetailsComponent implements OnInit {
  @Input({ required: true }) errorMessage!: string;

  constructor(public dialogRef: MatDialogRef<BookingDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public bookingData: BookingDetails) {

  }
  ngOnInit(): void {

  }

}

