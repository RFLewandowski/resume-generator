import {Component, Input, OnInit} from '@angular/core';
import {TimelineEntry} from "./timeline-entry";
import {DefaultColor} from "../../../../navbar/sheet-controls/color-control/color";
import {SheetStateService} from "../../../../../services/sheet-state.service";

@Component({
  selector: 'app-timeline-entry',
  standalone: true,
  imports: [],
  templateUrl: './timeline-entry.component.html',
  styleUrl: './timeline-entry.component.scss'
})
export class TimelineEntryComponent implements OnInit {
  @Input() timelineEntry: TimelineEntry = {}; //TODO trzeba dorobić placeholdery itp
  color: string = DefaultColor;


  constructor(private sheetStateService: SheetStateService) {
  }

  ngOnInit(): void {
    this.sheetStateService.currentColor.subscribe(
      color => this.color = color
    )

  }

}
