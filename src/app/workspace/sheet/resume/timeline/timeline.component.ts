import {DefaultColor} from "../../../navbar/sheet-controls/color-control/color";
import {Component, OnInit} from '@angular/core';
import {TimelineEntryComponent} from "./timeline-entry/timeline-entry.component";
import {TimelineModule} from "primeng/timeline";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {SheetContentService} from "../../../../services/sheet-content.service";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    TimelineEntryComponent,
    TimelineModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  color: string = DefaultColor;

  constructor(private sheetStateService: SheetStateService, protected sheetContentService: SheetContentService) {
  }

  ngOnInit(): void {
    this.sheetStateService.currentColor.subscribe(
      color => this.color = color
    );
  }

}
