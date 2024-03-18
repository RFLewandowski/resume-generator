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

  pickedColor: any; // FIXME to działa ale jest bez sensu, bo z pickera nie ma konkretnej wartości z listy -
  // więc nie można sprawdzić tak prosto czy coś jest kolorem z enuma - bo może nie być z enuma
  // najlepiej przerobić na wyciąganie z evenu

  get colors(): Color[] {
    return Object.values(Color);
  }

  constructor(private sheetStateService: SheetStateService) {
  }

  setColor(color: Color): void {
    this.sheetStateService.setColor(color);
  }
}
