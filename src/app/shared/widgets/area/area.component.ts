import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;
  @Input() data:any =[];
  constructor() {}
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random DATA',
      },
      subtitle: {
        text: 'DEMO',
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: this.data,
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
