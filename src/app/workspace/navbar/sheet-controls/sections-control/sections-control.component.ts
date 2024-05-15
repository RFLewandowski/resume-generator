import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SectionItem} from "./section-item";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {CustomSectionSelectorComponent} from "./custom-section-selector/custom-section-selector.component";
import {ButtonGroupModule} from "primeng/buttongroup";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {SvgIconComponent} from "../../../../svg-icon/svg-icon.component";

@Component({
  selector: 'app-sections-control',
  standalone: true,
    imports: [
        NgForOf,
        CustomSectionSelectorComponent,
        ButtonGroupModule,
        ButtonModule,
        DropdownModule,
        SvgIconComponent
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
