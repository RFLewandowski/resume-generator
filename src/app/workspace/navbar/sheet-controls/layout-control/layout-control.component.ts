import {Component} from '@angular/core';
import {Layout, LayoutIcons} from "../model/layout";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-layout-control',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './layout-control.component.html',
  styleUrl: './layout-control.component.scss'
})
export class LayoutControlComponent {

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
