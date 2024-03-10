import { Component } from '@angular/core';
import {SheetControlsComponent} from "./sheet-controls/sheet-controls.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    SheetControlsComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
