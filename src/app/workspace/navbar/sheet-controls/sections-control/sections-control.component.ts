import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SectionItem} from "./section-item";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {CustomSectionSelectorComponent} from "./custom-section-selector/custom-section-selector.component";

@Component({
  selector: 'app-sections-control',
  standalone: true,
  imports: [
    NgForOf,
    CustomSectionSelectorComponent
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
