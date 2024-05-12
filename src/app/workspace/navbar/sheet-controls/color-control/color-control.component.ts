import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {Color, ShadeOfGray} from "./color";
import {FormsModule} from "@angular/forms";
import {SvgIconComponent} from "../../../../svg-icon/svg-icon.component";
import {ColorPickerModule} from "primeng/colorpicker";

@Component({
  selector: 'app-color-control',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    SvgIconComponent,
    ColorPickerModule
  ],
  templateUrl: './color-control.component.html',
  styleUrl: './color-control.component.scss'
})
export class ColorControlComponent {
  protected readonly ShadeOfGray = ShadeOfGray; // TODO starting color for picker

  constructor(private sheetStateService: SheetStateService) {
  }

  // TODO ustaw active opdowiedni kolor tak jak w fontach
  get colors(): Color[] {
    return Object.values(Color);
  }

  setColor(color: Color): void {
    this.sheetStateService.setColor(color);
  }

  setColorFromPicker(event: any): void {
    // console.log(event)
    const color = event.value;
    this.sheetStateService.setColor(color);
  }
}
