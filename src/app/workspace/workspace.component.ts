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
    this.renderer.setStyle(document.body, 'background-image', 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))'); // TODO lepszy byłby

    this.sheetStateService.currentColor.subscribe(
      color => {
        this.renderer.setStyle(document.body, 'background-color', color)
      }
    );

  }

}
