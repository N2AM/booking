import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Emittable, Emitter } from "@ngxs-labs/emitter";
import { CheckInState } from "./check-in.state";
import { BookingDetails } from "../models/booking-details.model";

@Injectable({ providedIn: 'root' })
export class CheckInStateService {
    @Select(CheckInState.getBookingDetails) bookingDetails$!: Observable<BookingDetails>;
    @Emitter(CheckInState.setBookingDetails) bookingDetails!: Emittable<BookingDetails>;
}