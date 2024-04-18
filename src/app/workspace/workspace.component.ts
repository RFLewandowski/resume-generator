import { Component, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#caf1d8'); // TODO set this dynamically
  }

}
