import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from '../booking/booking/booking.component';
import { CheckInComponent } from './check-in/check-in.component';

const routes: Routes = [
  { path: 'check-in', component: CheckInComponent },
  { path: '', redirectTo: '/check-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckInRoutingModule { }
