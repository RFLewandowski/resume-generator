import { Component } from '@angular/core';
import {MenuComponent} from "./navbar/menu.component";
import {SheetComponent} from "./sheet/sheet.component";

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    MenuComponent,
    SheetComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {

}
