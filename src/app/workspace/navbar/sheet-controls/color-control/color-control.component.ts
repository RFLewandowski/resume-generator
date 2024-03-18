import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {Color, ShadeOfGray} from "./color";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-color-control',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './color-control.component.html',
  styleUrl: './color-control.component.scss'
})
export class ColorControlComponent {
  protected readonly ShadeOfGray = ShadeOfGray;

  get colors(): Color[] {
    return Object.values(Color);
  }

  constructor(private sheetStateService: SheetStateService) {
  }

  setColor(color: Color): void {
    this.sheetStateService.setColor(color);
  }

  setColorFromPicker(event: any): void {
    const color = event.target.value;
    this.sheetStateService.setColor(color);
  }
}
