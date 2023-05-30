import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";
import { AppState } from "../store/app.state";
import { Observable } from "rxjs";
import { Emittable, Emitter } from "@ngxs-labs/emitter";

@Injectable({ providedIn: 'root' })
export class AppStateService {
    @Select(AppState.getPageTitle) readonly pageTitle$!: Observable<string>;
    @Emitter(AppState.setPageTitle) pageTitle!: Emittable<string>;
}