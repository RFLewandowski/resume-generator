import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SectionItem} from "./section-item";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {CustomSectionSelectorComponent} from "./custom-section-selector/custom-section-selector.component";
import {SvgIconComponent} from "../../../../svg-icon/svg-icon.component";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import {StyleClassModule} from "primeng/styleclass";

@Component({
  selector: 'app-sections-control',
  standalone: true,
    imports: [
        NgForOf,
        CustomSectionSelectorComponent,
        SvgIconComponent,
        InputSwitchModule,
        FormsModule,
        StyleClassModule,
    ],
  templateUrl: './sections-control.component.html',
  styleUrl: './sections-control.component.scss'
})
export class SectionsControlComponent {
  constructor(public sheetStateService: SheetStateService) {
  }

  logToggleSectionItem(item: SectionItem) {
    this.sheetStateService.logToggleSectionItem(item);
  }
}
