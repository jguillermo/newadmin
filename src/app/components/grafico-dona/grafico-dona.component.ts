import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {
  @Input('labels') public doughnutChartLabels: string[] = [];
  @Input('data') public doughnutChartData: number[] = [];
  @Input('type') public doughnutChartType: string = 'doughnut';

  constructor() {
  }

  ngOnInit() {
  }

}
