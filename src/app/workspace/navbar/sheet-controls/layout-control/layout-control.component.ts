import {Component} from '@angular/core';
import {Layout, LayoutIcons} from "./layout";
import {SheetStateService} from "../../../../services/sheet-state.service";
import {NgForOf} from "@angular/common";
import {SvgIconComponent} from "../../../../svg-icon/svg-icon.component";

@Component({
  selector: 'app-layout-control',
  standalone: true,
  imports: [
    NgForOf,
    SvgIconComponent
  ],
  templateUrl: './layout-control.component.html',
  styleUrl: './layout-control.component.scss'
})
export class LayoutControlComponent {

  protected readonly LayoutIcons = LayoutIcons;

  get layouts(): Layout[] {
    return Object.values(Layout);
  }
  // todo ustaw active opdowiedni layout tak jak w fontach

  constructor(private sheetStateService: SheetStateService) {
  }

  setLayout(layout: Layout): void {
    this.sheetStateService.setLayout(layout);
  }
}
