import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
})
export class StatsCardComponent implements OnInit {

  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() count: string = '';

  constructor() { }

  ngOnInit(): void { }

}
