import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {Color, DefaultColor, ShadeOfGray} from "./color";
import {FormsModule} from "@angular/forms";
import {SvgIconComponent} from "../../../../svg-icon/svg-icon.component";
import {ColorPickerModule} from "primeng/colorpicker";
import {StyleClassModule} from "primeng/styleclass";

@Component({
  selector: 'app-color-control',
  standalone: true,
    imports: [
        NgForOf,
        FormsModule,
        SvgIconComponent,
        ColorPickerModule,
        NgClass,
        StyleClassModule
    ],
  templateUrl: './color-control.component.html',
  styleUrl: './color-control.component.scss'
})
export class ColorControlComponent {

  selectedColor: string = DefaultColor;

  protected readonly defaultPickerColor = ShadeOfGray;

  constructor(private sheetStateService: SheetStateService) {
  }

  get colors(): Color[] {
    return Object.values(Color);
  }

  setColor(color: Color): void {
    this.sheetStateService.setColor(color);
    this.selectedColor = color;

  }

  setColorFromPicker(event: any): void {
    const color = event.value;
    this.sheetStateService.setColor(color);
    this.selectedColor = color;
  }

  isSelectedFromPicker(): boolean {
    return !Object.values(Color).includes(this.selectedColor as Color);
  }
}
