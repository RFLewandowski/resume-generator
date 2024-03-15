import {Injectable} from '@angular/core';
import {Layout} from "../workspace/navbar/sheet-controls/model/layout";

@Injectable({
  providedIn: 'root'
})
export class SheetStateService {

  layout: Layout = Layout.Split;

  setLayout(layout: Layout): void {
    this.layout = layout;
    console.log(`new layout = ${this.layout}`)
  }
}
