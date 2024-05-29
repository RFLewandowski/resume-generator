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
    this.renderer.setStyle(document.body, 'background-color', '#0082e6');// TODO set this dynamically
    // this.renderer.setStyle(document.body, 'background-image', 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2))'); // '#caf1d8' // TODO set this dynamically
  }

}
