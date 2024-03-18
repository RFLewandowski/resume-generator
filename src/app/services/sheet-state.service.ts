import {Injectable} from '@angular/core';
import {Layout} from "../workspace/navbar/sheet-controls/layout-control/layout";
import {Color} from "../workspace/navbar/sheet-controls/color-control/color";

@Injectable({
  providedIn: 'root'
})
export class SheetStateService {

  layout: Layout = Layout.Split;
  color: any = Color.AzureBlue;

  setLayout(layout: Layout): void {
    this.layout = layout;
    console.log(`new layout = ${this.layout}`)
  }

  setColor(color: any) {
    this.color = color;
    console.log(`new color = ${this.color}`)
  }
}
