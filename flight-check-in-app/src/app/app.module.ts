import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//NGSX
import { NgxsModule } from '@ngxs/store';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

// States
import { AppState } from './store/app.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';


import { environment } from '../environments/environment';
import { HeaderComponent } from './marginals/header/header.component';
import { AppStateService } from './services/app-state.service';

const initializeApp = (appStateService: AppStateService) => {
  return async () => {
    try {
      const initialPageTitle = appStateService.pageTitle.emit({ pageTitle: 'Check-In' })
    } catch (e) {
      console.log('Setting initial Page title error')
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsEmitPluginModule.forRoot(),
    NgxsLoggerPluginModule,
    NgxsReduxDevtoolsPluginModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [AppStateService],
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
