import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Font} from "./font";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {FontSize} from "./font-size";
import {LayoutIcons} from "../layout-control/layout";
import {SvgIconComponent} from "../../../../svg-icon/svg-icon.component";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {StyleClassModule} from "primeng/styleclass";

@Component({
  selector: 'app-typography-control',
  standalone: true,
    imports: [
        NgForOf,
        SvgIconComponent,
        DropdownModule,
        FormsModule,
        SelectButtonModule,
        StyleClassModule
    ],
  templateUrl: './typography-control.component.html',
  styleUrl: './typography-control.component.scss'
})
export class TypographyControlComponent {

  selectedFont: Font = this.sheetStateService.font
  selectedSize: FontSize = this.sheetStateService.fontSize;

  fonts: Font[] = Object.values(Font);
  fontSizes: FontSize[] = Object.values(FontSize);
  protected readonly LayoutIcons = LayoutIcons;

  constructor(private sheetStateService: SheetStateService) {
  }

  setFont(event: any) {
    const font: Font = event.value;
    this.sheetStateService.setFont(font);
    this.selectedFont = this.sheetStateService.font
  }

  setFontSize(event: any) {
    const fontSize: FontSize = event.value
    this.sheetStateService.setFontSize(fontSize);
    this.selectedSize = this.sheetStateService.fontSize;
  }
}
