import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.scss'],
})
export class StackedBarComponent implements OnInit, OnChanges {

  @Input() title: string = 'Budget exceeded projects';
  @Input() dataAxis: string[];
  @Input() budgets: number[];
  @Input() exceededBudgets: number[];

  options: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['exceededBudgets'].currentValue && changes['exceededBudgets'].currentValue !== changes['exceededBudgets'].previousValue) {
        this.refreshData();
    }
  }

  ngOnInit(): void {
   
  }

  refreshData() {
    this.options = {
      title: {
        text: this.title,
        x: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#2a2073'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
      xAxis: {
        data: this.dataAxis,
        axisLabel: {
          inside: false,
          color: '#9f9f9f',
        },
        axisTick: {
          show: true,
        },
        axisLine: {
          show: true,
        },
        z: 10,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#999',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          type: 'bar',
          stack: 'x',
          itemStyle: {
            color: new LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#CBAED7' },
              { offset: 0.5, color: '#B691D2' },
              { offset: 1, color: '#9B6DC6' },
            ]),
          },
          barWidth: '20%',
          data: this.budgets,
        },
        {
          type: 'bar',
          stack: 'x',
          itemStyle: { color: '#b21ab4' },
          barWidth: '20%',
          data: this.exceededBudgets,
        },
      ],
    };
  }

}
