export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Booking = {
  __typename?: 'Booking';
  bookingCode?: Maybe<Scalars['String']['output']>;
  contactDetails?: Maybe<Array<Maybe<ContactDetails>>>;
  itinerary?: Maybe<Itinerary>;
  passengers?: Maybe<Passenger>;
};

export type Cabin = {
  __typename?: 'Cabin';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Carrier = {
  __typename?: 'Carrier';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type City = {
  __typename?: 'City';
  IATACode?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Class = {
  __typename?: 'Class';
  code?: Maybe<Scalars['String']['output']>;
};

export type Connection = {
  __typename?: 'Connection';
  destination?: Maybe<Location>;
  duration?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  origin?: Maybe<Location>;
  segments?: Maybe<Array<Maybe<Segment>>>;
};

export type ContactDetails = {
  __typename?: 'ContactDetails';
  address?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['String']['output']>;
};

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Flight = {
  __typename?: 'Flight';
  carrier?: Maybe<Carrier>;
  number?: Maybe<Scalars['String']['output']>;
  numberOfStops?: Maybe<Scalars['Int']['output']>;
  operatingFlight?: Maybe<OperatingFlight>;
  sellingClass?: Maybe<Class>;
  status?: Maybe<FlightStatus>;
};

export type FlightStatus = {
  __typename?: 'FlightStatus';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Itinerary = {
  __typename?: 'Itinerary';
  connections?: Maybe<Array<Maybe<Connection>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  IATACode?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OperatingFlight = {
  __typename?: 'OperatingFlight';
  arrivalTerminal?: Maybe<Terminal>;
  cabin?: Maybe<Cabin>;
  carrier?: Maybe<Carrier>;
  checkInEnd?: Maybe<Scalars['String']['output']>;
  checkInStart?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Equipment>;
  flown?: Maybe<Scalars['Boolean']['output']>;
  localCheckInEnd?: Maybe<Scalars['String']['output']>;
  localCheckInStart?: Maybe<Scalars['String']['output']>;
  localScheduledArrival?: Maybe<Scalars['String']['output']>;
  localScheduledDeparture?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  scheduledArrival?: Maybe<Scalars['String']['output']>;
  scheduledDeparture?: Maybe<Scalars['String']['output']>;
};

export type Passenger = {
  __typename?: 'Passenger';
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Title>;
};

export type Query = {
  __typename?: 'Query';
  booking?: Maybe<Booking>;
};

export type Segment = {
  __typename?: 'Segment';
  arriveOn?: Maybe<Location>;
  departFrom?: Maybe<Location>;
  id?: Maybe<Scalars['Int']['output']>;
  informational?: Maybe<Scalars['Boolean']['output']>;
  marketingFlight?: Maybe<Flight>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Terminal = {
  __typename?: 'Terminal';
  name?: Maybe<Scalars['String']['output']>;
};

export type Title = {
  __typename?: 'Title';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};
