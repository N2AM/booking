import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { PATHS } from 'src/app/constants';

const routes: Routes = [
  { path: PATHS.CHECKIN, component: CheckInComponent },
  { path: '', redirectTo: '/check-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckInRoutingModule { }
