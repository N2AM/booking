import { PATHS } from './../../../constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  checkInForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
      bookingCode: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6),
        Validators.pattern(/^[2-9a-zA-Z]+$/)
      ]],
      familyName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]]
    });
  }

  get bookingCode() {
    return this.checkInForm.get('bookingCode');
  }

  get familyName() {
    return this.checkInForm.get('familyName');
  }

  onSubmit() {
    if (this.checkInForm.valid) {
      // Perform check-in verification here
      console.log('Check-in form submitted!');
      console.log('Booking Code:', this.checkInForm.value.bookingCode);
      console.log('Family Name:', this.checkInForm.value.familyName);
      this.router.navigate([PATHS.BOOKING])
    }
  }
}
