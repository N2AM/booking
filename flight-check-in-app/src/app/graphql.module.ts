import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS, ApolloModule, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { GRAPHQL_URL } from './constants';

const uri = GRAPHQL_URL; // URL of the GraphQL server

export const createApollo = (httpLink: HttpLink) => {
  return {
    cache: new InMemoryCache({ addTypename: false }),
    link: httpLink.create({
      uri: uri,
    }),
  }
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
