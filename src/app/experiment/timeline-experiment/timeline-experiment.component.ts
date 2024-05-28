import {Component} from '@angular/core';
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-timeline-experiment',
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './timeline-experiment.component.html',
  styleUrl: './timeline-experiment.component.scss'
})
export class TimelineExperimentComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      {status: 'Ordered', date: '15/10/2020 10:30', color: '#0082e6'},
      {status: 'Processing', date: '15/10/2020 14:00', color: '#0082e6'},
      {status: 'Shipped', date: '15/10/2020 16:15', color: '#0082e6'},
      {status: 'Delivered', date: '16/10/2020 10:00', color: '#0082e6'}
    ];
  }
}
