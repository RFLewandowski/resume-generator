import { Component } from '@angular/core';
import {MenubarExampleComponent} from "../../experiment/menubar-example/menubar-example.component";

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    MenubarExampleComponent
  ],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent {
 // TODO remove menu MenubarExampleComponent when not required
}
