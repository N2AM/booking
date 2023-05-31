import { Injectable, Injector } from '@angular/core';
import { Selector, State, StateContext } from '@ngxs/store';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { CheckInActionsType } from './check-in.actions';
import { BookingDetails } from '../models/booking-details.model';
import { GraphqlService } from 'src/app/services/graphql.service';

const defaultState: BookingDetails = {
    bookingCode: '',
    contactDetails: [
        {
            class: '',
            address: '',
        },
    ],
    itinerary: {
        type: '',
        connections: [
            {
                id: 0,
                duration: '',
                origin: {
                    IATACode: '',
                    name: '',
                    city: {
                        IATACode: '',
                        name: '',
                        country: {
                            code: '',
                            name: '',
                        },
                    },
                },
                destination: {
                    IATACode: '',
                    name: '',
                    city: {
                        IATACode: '',
                        name: '',
                        country: {
                            code: '',
                            name: '',
                        },
                    },
                },
                segments: [
                    {
                        id: 0,
                        type: '',
                        informational: false,
                        departFrom: {
                            IATACode: '',
                            name: '',
                            city: {
                                IATACode: '',
                                name: '',
                                country: {
                                    code: '',
                                    name: '',
                                },
                            },
                        },
                        arriveOn: {
                            IATACode: '',
                            name: '',
                            city: {
                                IATACode: '',
                                name: '',
                                country: {
                                    code: '',
                                    name: '',
                                },
                            },
                        },
                        marketingFlight: {
                            number: '',
                            carrier: {
                                code: '',
                                name: '',
                            },
                            status: {
                                code: '',
                                name: '',
                            },
                            numberOfStops: 0,
                            sellingClass: {
                                code: '',
                            },
                            operatingFlight: {
                                number: '',
                                carrier: {
                                    code: '',
                                    name: '',
                                },
                                duration: '',
                                flown: false,
                                checkInStart: '',
                                localCheckInStart: '',
                                checkInEnd: '',
                                localCheckInEnd: '',
                                scheduledArrival: '',
                                localScheduledArrival: '',
                                scheduledDeparture: '',
                                localScheduledDeparture: '',
                                arrivalTerminal: {
                                    name: '',
                                },
                                cabin: {
                                    code: '',
                                    name: '',
                                },
                                equipment: {
                                    code: '',
                                    name: '',
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
    passengers: {
        id: 0,
        firstName: '',
        lastName: '',
        title: {
            code: '',
            name: '',
        },
    },
};

@State<BookingDetails>({
    name: 'check-in',
    defaults: defaultState,
})
@Injectable()
export class CheckInState {
    private static graphqlService: GraphqlService;

    constructor(private injector: Injector) {
        CheckInState.graphqlService = injector.get(GraphqlService);
    }

    @Selector()
    static getBookingDetails(state: BookingDetails): BookingDetails {
        return state;
    }

    @Receiver({ type: CheckInActionsType.SET_BOOKING_DETAILS })
    static setBookingDetails(
        context: StateContext<BookingDetails>,
        { payload }: EmitterAction<BookingDetails>
    ): void {
        context.patchState(payload);
    }

    @Receiver({ type: CheckInActionsType.SET_BOOKING_DETAILS })
    static BookingCheck(
        context: StateContext<any>,
        { payload }: EmitterAction<any>
    ): void {
        context.patchState(payload);
        return
    }

}
