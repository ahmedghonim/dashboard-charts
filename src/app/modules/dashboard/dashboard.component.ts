import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigChrt:any= [];
  cards:any= [];
  pie:any= [];
  constructor(private _DashboardService: DashboardService) {}
  
  ngOnInit(): void {
    this.bigChrt = this._DashboardService.bigChrt();
    this.cards = this._DashboardService.cards();
    this.pie = this._DashboardService.pie();
  }
}
