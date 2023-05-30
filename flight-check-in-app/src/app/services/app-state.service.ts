import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";
import { AppState } from "../store/app.state";
import { Observable } from "rxjs";
import { Emittable, Emitter } from "@ngxs-labs/emitter";
import { AppStateModel } from "../store/models/appState.model";

@Injectable({ providedIn: 'root' })
export class AppStateService {
    @Select(AppState.getPageTitle) pageTitle$!: Observable<AppStateModel>;
    @Emitter(AppState.setPageTitle) pageTitle!: Emittable<AppStateModel>;
}