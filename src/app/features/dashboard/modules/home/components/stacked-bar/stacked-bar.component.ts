import { Component, Input, OnInit } from '@angular/core';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.scss'],
})
export class StackedBarComponent implements OnInit {

  @Input() title: string = 'Budget exceeded projects';
  @Input() dataAxis: string[] = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5', 'Project6', 'Project7'];
  @Input() budgets: number[] = [200, 182, 191, 234, 290, 330, 310];
  @Input() exceededBudgets: number[] = [20, 12, 11, 24, 20, 30, 30];

  options: any;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      title: {
        text: this.title,
        x: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#2a2073'
        }
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

  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }

}
