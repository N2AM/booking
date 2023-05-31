import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';
import { AppStateModel } from 'src/app/store/models/appState.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageTitle!: AppStateModel

  constructor(private appStateService: AppStateService) { }

  ngOnInit(): void {

    this.appStateService.pageTitle$.subscribe((title: AppStateModel) => {
      this.pageTitle = title;
    })

  }


}
