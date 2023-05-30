import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) { }

  getBooking(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetBooking {
          booking {
            bookingCode
            contactDetails {
              class
              address
            }
            itinerary {
              type
              connections {
                id
                duration
                origin {
                  IATACode
                  name
                  city {
                    IATACode
                    name
                    country {
                      code
                      name
                    }
                  }
                }
                destination {
                  IATACode
                  name
                  city {
                    IATACode
                    name
                    country {
                      code
                      name
                    }
                  }
                }
                segments {
                  id
                  type
                  informational
                  departFrom {
                    IATACode
                    name
                    city {
                      IATACode
                      name
                      country {
                        code
                        name
                      }
                    }
                  }
                  arriveOn {
                    IATACode
                    name
                    city {
                      IATACode
                      name
                      country {
                        code
                        name
                      }
                    }
                  }
                  marketingFlight {
                    number
                    carrier {
                      code
                      name
                    }
                    status {
                      code
                      name
                    }
                    numberOfStops
                    sellingClass {
                      code
                    }
                    operatingFlight {
                      number
                      carrier {
                        code
                        name
                      }
                      duration
                      flown
                      checkInStart
                      localCheckInStart
                      checkInEnd
                      localCheckInEnd
                      scheduledArrival
                      localScheduledArrival
                      scheduledDeparture
                      localScheduledDeparture
                      arrivalTerminal {
                        name
                      }
                      cabin {
                        code
                        name
                      }
                      equipment {
                        code
                        name
                      }
                    }
                  }
                }
              }
            }
            passengers {
              id
              firstName
              lastName
              title {
                code
                name
              }
            }
          }
        }
      `,
    });
  }
}
