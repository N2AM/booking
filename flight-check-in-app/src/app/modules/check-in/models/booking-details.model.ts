export interface BookingDetails {

    bookingCode: string,
    contactDetails: [
        {
            class: string,
            address: string
        }
    ],
    itinerary: {
        type: string,
        connections: [
            {
                id: number,
                duration: string,
                origin: {
                    IATACode: string,
                    name: string,
                    city: {
                        IATACode: string,
                        name: string,
                        country: {
                            code: string,
                            name: string
                        }
                    }
                },
                destination: {
                    IATACode: string,
                    name: string,
                    city: {
                        IATACode: string,
                        name: string,
                        country: {
                            code: string,
                            name: string
                        }
                    }
                },
                segments: [
                    {
                        id: number,
                        type: string,
                        informational: boolean,
                        departFrom: {
                            IATACode: string,
                            name: string,
                            city: {
                                IATACode: string,
                                name: string,
                                country: {
                                    code: string,
                                    name: string
                                }
                            }
                        },
                        arriveOn: {
                            IATACode: string,
                            name: string,
                            city: {
                                IATACode: string,
                                name: string,
                                country: {
                                    code: string,
                                    name: string
                                }
                            }
                        },
                        marketingFlight: {
                            number: string,
                            carrier: {
                                code: string,
                                name: string
                            },
                            status: {
                                code: string,
                                name: string
                            },
                            numberOfStops: number,
                            sellingClass: {
                                code: string
                            },
                            operatingFlight: {
                                number: string,
                                carrier: {
                                    code: string,
                                    name: string
                                },
                                duration: string,
                                flown: boolean,
                                checkInStart: string,
                                localCheckInStart: string,
                                checkInEnd: string,
                                localCheckInEnd: string,
                                scheduledArrival: string,
                                localScheduledArrival: string,
                                scheduledDeparture: string,
                                localScheduledDeparture: string,
                                arrivalTerminal: {
                                    name: string
                                },
                                cabin: {
                                    code: string,
                                    name: string
                                },
                                equipment: {
                                    code: string,
                                    name: string
                                }
                            }
                        }
                    }]
            }]
    },
    passengers: {
        id: number,
        firstName: string,
        lastName: string,
        title: {
            code: string,
            name: string
        }
    }
}