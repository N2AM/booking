import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/check-in/check-in.module').then(m => m.CheckInModule)
  },
  {
    path: 'booking', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
