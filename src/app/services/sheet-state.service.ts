import {Injectable} from '@angular/core';
import {Layout} from "../workspace/navbar/sheet-controls/layout-control/layout";
import {Color} from "../workspace/navbar/sheet-controls/color-control/color";
import {Font} from "../workspace/navbar/sheet-controls/typography-control/font";
import {FontSize} from "../workspace/navbar/sheet-controls/typography-control/font-size";

@Injectable({
  providedIn: 'root'
})
export class SheetStateService {

  layout: Layout = Layout.Split;
  color: any = Color.AzureBlue;
  font: Font = Font.Nunito;
  fontSize: FontSize = FontSize.Medium;

  setLayout(layout: Layout): void {
    this.layout = layout;
    console.log(`new layout = ${this.layout}`)
  }

  setColor(color: any) {
    this.color = color;
    console.log(`new color = ${this.color}`)
  }

  setFont(font: Font) {
    this.font = font;
    console.log(`new font = ${this.font}`)
  }

  setFontSize(fontSize: FontSize) {
    this.fontSize = fontSize;
    console.log(`new font = ${this.fontSize}`)
  }
}
