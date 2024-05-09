import {Component} from '@angular/core';
import {LayoutControlComponent} from "./layout-control/layout-control.component";
import {SectionsControlComponent} from "./sections-control/sections-control.component";
import {ColorControlComponent} from "./color-control/color-control.component";
import {TypographyControlComponent} from "./typography-control/typography-control.component";

@Component({
  selector: 'app-sheet-controls',
  standalone: true,
  imports: [
    LayoutControlComponent,
    SectionsControlComponent,
    ColorControlComponent,
    TypographyControlComponent
  ],
  templateUrl: './sheet-controls.component.html',
  styleUrl: './sheet-controls.component.scss'
})
export class SheetControlsComponent {
}
