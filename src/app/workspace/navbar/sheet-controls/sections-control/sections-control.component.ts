import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SectionItem} from "./section-item";
import {SheetStateService} from "../../../../services/sheet-state.service";

@Component({
  selector: 'app-sections-control',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './sections-control.component.html',
  styleUrl: './sections-control.component.scss'
})
export class SectionsControlComponent {
  constructor(public sheetStateService: SheetStateService) {
  }

  toggleSectionItem(item: SectionItem) {
    this.sheetStateService.toggleSectionItem(item);
  }
}
