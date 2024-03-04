import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {SheetComponent} from "./sheet/sheet.component";

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    NavbarComponent,
    SheetComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {

}
