import { Component } from '@angular/core';
import {SheetControlsComponent} from "./sheet-controls/sheet-controls.component";
import {ToolbarModule} from "primeng/toolbar";
import {SharedModule} from "primeng/api";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    SheetControlsComponent,
    ToolbarModule,
    SharedModule,
    NgOptimizedImage
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
