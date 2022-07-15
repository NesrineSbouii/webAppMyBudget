import { Component, Input, OnInit } from '@angular/core';
import { CoolTheme } from './theme';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit {

  @Input() title: string = 'Your budget is 12000€';
  @Input() data: any[] = [
    { value: 10, name: 'rose1' },
    { value: 5, name: 'rose2' },
    { value: 15, name: 'rose3' },
    { value: 25, name: 'rose4' },
    { value: 20, name: 'rose5' },
    { value: 35, name: 'rose6' },
    { value: 30, name: 'rose7' },
    { value: 40, name: 'rose8' }
  ];

  options: any;
  coolTheme = CoolTheme;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      title: {
        text: this.title,
        // subtext: 'Budget',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      calculable: true,
      series: [
        {
          name: 'area',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: this.data
        }
      ]
    };
  }
}
