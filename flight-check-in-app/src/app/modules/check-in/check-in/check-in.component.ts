import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDisplayComponent } from 'src/app/error-handling/error-display/error-display.component';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { GraphqlService } from 'src/app/services/graphql.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit, OnDestroy {
  checkInForm: FormGroup = new FormGroup({});
  readonly #subscription = new Subscription();

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private graphqlService: GraphqlService,
  ) { }

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
      bookingCode: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6),
        Validators.pattern(/^[2-9a-zA-Z]+$/)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]]
    });
  }

  get bookingCode() {
    return this.checkInForm.get('bookingCode');
  }

  get lastName() {
    return this.checkInForm.get('lastNameName');
  }

  onSubmit() {
    if (this.checkInForm.valid) {
      this.bookingCheck(this.checkInForm.value.bookingCode, this.checkInForm.value.lastName);
    }
  }

  openDialog(errorMessgae: string): void {
    const dialogRef = this.dialog.open(ErrorDisplayComponent, {
      data: { errorMessage: errorMessgae },
    });
  }

  openBookingDetails() {
    this.#subscription.add(this.graphqlService.getBooking().subscribe({
      next: (data: any) => {
        if (data) {
          const dialogRef = this.dialog.open(BookingDetailsComponent, {
            data: data.data.booking,
          });
        } else {
          this.openDialog('Invalid booking code or family name');
        }
      },
      error: (error) => {
        this.openDialog('An error occurred while checking in');
      }
    }
    )


    )

  }


  bookingCheck(bookingCode: string, lastName: string): void {

    this.#subscription.add(this.graphqlService.bookingCheck(bookingCode, lastName)
      .subscribe({
        next: (data: any) => {
          if (data.data.bookingCheck) {
            this.openBookingDetails()
          } else {
            this.openDialog('Invalid booking code or family name');
          }
        },
        error: (error) => {
          this.openDialog('An error occurred while checking in');
        }
      }
      ))
  }

  ngOnDestroy(): void {
    this.#subscription.unsubscribe()

  }
}
