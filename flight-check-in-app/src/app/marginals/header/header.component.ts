import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';
import { AppStateModel } from 'src/app/store/models/appState.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageTitle$!: Observable<AppStateModel>


  constructor(private appStateService: AppStateService) { }

  ngOnInit(): void {

    this.pageTitle$ = this.appStateService.pageTitle$;

  }


}
