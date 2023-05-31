import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  constructor(private appStateService: AppStateService) { }
  ngOnInit(): void {
    const initialPageTitle = this.appStateService.pageTitle.emit({ pageTitle: 'Booking' })

  }
}
