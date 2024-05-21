import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {Color, ShadeOfGray} from "./color";
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

  selectedColor: string = this.sheetStateService.color

  protected readonly defaultPickerColor = ShadeOfGray;

  constructor(private sheetStateService: SheetStateService) {
  }

  // TODO ustaw active opdowiedni kolor tak jak w fontach
  get colors(): Color[] {
    return Object.values(Color);
  }

  setColor(color: Color): void {
    this.sheetStateService.setColor(color);
    this.selectedColor = color;

  }

  setColorFromPicker(event: any): void {
    // console.log(event)
    const color = event.value;
    this.sheetStateService.setColor(color);
    this.selectedColor = color;
  }

  getSafeColor(myColorfield: any) {

  }

  isSelectedFromPicker(): boolean {
    return !Object.values(Color).includes(this.selectedColor as Color);
  }
}
