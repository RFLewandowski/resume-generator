import {Component, Renderer2} from '@angular/core';
import {MenuComponent} from "./navbar/menu.component";
import {SheetComponent} from "./sheet/sheet.component";
import {SheetStateService} from "../services/sheet-state.service";

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

  constructor(private renderer: Renderer2, private sheetStateService: SheetStateService) {
  }

  ngOnInit(): void {
    this.sheetStateService.currentColor.subscribe(
      color => this.renderer.setStyle(
        document.body, 'background-color', color
      )
    );
  }

}
