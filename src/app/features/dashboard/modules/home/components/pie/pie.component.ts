import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoolTheme } from './theme';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit, OnChanges {

  @Input() data: any[];

  options: any;
  coolTheme = CoolTheme;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue && changes['data'].currentValue !== changes['data'].previousValue) {
      this.refreshDate();
    }
  }

  ngOnInit(): void { }

  refreshDate() {
    this.options = {
      title: {
        text: `Your budget is ${this.getSumBudget()} €`,
        // subtext: 'Budget',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: this.data.map(p => p.name)
      },
      calculable: true,
      series: [
        {
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: this.getFormatedData()
        }
      ]
    };
  }

  getSumBudget() {
    return this.data.reduce((acc, p) => { return acc + p.budget }, 0);
  }

  getFormatedData() {
    return this.data.map(p => { return { value: p.budget, name: p.name } })
  }
}
