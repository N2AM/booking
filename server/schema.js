const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    booking: Booking,
    bookingCheck(bookingCode: String!, lastName: String!): Boolean
  }

  type Booking {
    bookingCode: String
    contactDetails: [ContactDetails]
    itinerary: Itinerary
    passengers: Passenger
  }

  type ContactDetails {
    class: String
    address: String
  }

  type Itinerary {
    type: String
    connections: [Connection]
  }

  type Connection {
    id: Int
    duration: String
    origin: Location
    destination: Location
    segments: [Segment]
  }

  type Location {
    IATACode: String
    name: String
    city: City
  }

  type City {
    IATACode: String
    name: String
    country: Country
  }

  type Country {
    code: String
    name: String
  }

  type Segment {
    id: Int
    type: String
    informational: Boolean
    departFrom: Location
    arriveOn: Location
    marketingFlight: Flight
  }

  type Flight {
    number: String
    carrier: Carrier
    status: FlightStatus
    numberOfStops: Int
    sellingClass: Class
    operatingFlight: OperatingFlight
  }

  type Carrier {
    code: String
    name: String
  }

  type FlightStatus {
    code: String
    name: String
  }

  type Class {
    code: String
  }

  type OperatingFlight {
    number: String
    carrier: Carrier
    duration: String
    flown: Boolean
    checkInStart: String
    localCheckInStart: String
    checkInEnd: String
    localCheckInEnd: String
    scheduledArrival: String
    localScheduledArrival: String
    scheduledDeparture: String
    localScheduledDeparture: String
    arrivalTerminal: Terminal
    cabin: Cabin
    equipment: Equipment
  }

  type Terminal {
    name: String
  }

  type Cabin {
    code: String
    name: String
  }

  type Equipment {
    code: String
    name: String
  }

  type Passenger {
    id: Int
    firstName: String
    lastName: String
    title: Title
  }

  type Title {
    code: String
    name: String
  }
`);

module.exports = schema;
