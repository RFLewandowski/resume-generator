import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Font} from "./font";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {FontSize} from "./font-size";

@Component({
  selector: 'app-typography-control',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './typography-control.component.html',
  styleUrl: './typography-control.component.scss'
})
export class TypographyControlComponent {

  selectedFont: Font = this.sheetStateService.font
  selectedSize: FontSize = this.sheetStateService.fontSize;

  fonts: Font[] = Object.values(Font);
  fontSizes: FontSize[] = Object.values(FontSize);

  constructor(private sheetStateService: SheetStateService) {
  }

  setFont(event: any) {
    const font: Font = event.target.value;
    this.sheetStateService.setFont(font);
    this.selectedFont = this.sheetStateService.font
  }

  setFontSize(fontSize: FontSize) {
    this.sheetStateService.setFontSize(fontSize);
    this.selectedSize = this.sheetStateService.fontSize;
  }
}
