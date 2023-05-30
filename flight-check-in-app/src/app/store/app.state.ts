import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AppStateModel } from './models/appState.model';
import { AppActionsType } from './app.actions';
import { Receiver } from '@ngxs-labs/emitter';

const defaultState: AppStateModel = {
    pageTitle: ''
}

@State<AppStateModel>({
    name: 'app',
    defaults: defaultState,
})
@Injectable()
export class AppState {

    constructor() { }

    @Selector()
    static getPageTitle(state: AppStateModel): string {
        return state.pageTitle;
    }

    @Receiver({ type: AppActionsType.GET_PAGE_TITLe })
    static setPageTitle(context: StateContext<AppStateModel>, action: AppActions.SetPageTitle): void {
        context.patchState({
            pageTitle: action.payload.title,
        });
    }
}