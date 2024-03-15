import {Component} from '@angular/core';
import {SectionsComponent} from "./sections/sections.component";
import {SheetStateService} from "../../../services/sheet-state.service";
import {Layout, LayoutIcons} from "./model/layout";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sheet-controls',
  standalone: true,
  imports: [
    SectionsComponent,
    NgForOf
  ],
  templateUrl: './sheet-controls.component.html',
  styleUrl: './sheet-controls.component.scss'
})
export class SheetControlsComponent {

  protected readonly LayoutIcons = LayoutIcons;

  get layouts(): Layout[] {
    return Object.values(Layout);
  }


  constructor(private sheetStateService: SheetStateService) {
  }

  setLayout(layout: Layout): void {
    this.sheetStateService.setLayout(layout);
  }
}
