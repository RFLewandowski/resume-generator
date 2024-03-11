import { Component } from '@angular/core';
import {SectionsComponent} from "./sections/sections.component";

@Component({
  selector: 'app-sheet-controls',
  standalone: true,
  imports: [
    SectionsComponent
  ],
  templateUrl: './sheet-controls.component.html',
  styleUrl: './sheet-controls.component.scss'
})
export class SheetControlsComponent {

}
