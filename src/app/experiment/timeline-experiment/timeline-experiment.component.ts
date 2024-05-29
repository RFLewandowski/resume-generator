import {Component, OnInit} from '@angular/core';
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {SheetStateService} from "../../services/sheet-state.service";
import {DefaultColor} from "../../workspace/navbar/sheet-controls/color-control/color";

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
export class TimelineExperimentComponent implements OnInit {
  events: EventItem[];

  constructor(private sheetStateService: SheetStateService) {
    this.events = [
      {status: 'Ordered', date: '15/10/2020 10:30', color: DefaultColor},
      {status: 'Processing', date: '15/10/2020 14:00', color: DefaultColor},
      {status: 'Shipped', date: '15/10/2020 16:15', color: DefaultColor},
      {status: 'Delivered', date: '16/10/2020 10:00', color: DefaultColor}
    ];
  }

  ngOnInit(): void {
    this.sheetStateService.currentColor.subscribe(
      color => {
        this.events.forEach(event => {
          event.color = color;
        });
      }
    );
  }
}
