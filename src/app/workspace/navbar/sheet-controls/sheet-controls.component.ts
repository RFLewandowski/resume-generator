import {Component} from '@angular/core';
import {LayoutControlComponent} from "./layout-control/layout-control.component";
import {SectionsControlComponent} from "./sections-control/sections-control.component";
import {ColorControlComponent} from "./color-control/color-control.component";
import {TypographyControlComponent} from "./typography-control/typography-control.component";
import {ButtonModule} from "primeng/button";
import {SvgIconComponent} from "../../../svg-icon/svg-icon.component";
import {PfDropdownComponent} from "../pf-dropdown/pf-dropdown.component";

@Component({
  selector: 'app-sheet-controls',
  standalone: true,
  imports: [
    LayoutControlComponent,
    SectionsControlComponent,
    ColorControlComponent,
    TypographyControlComponent,
    ButtonModule,
    SvgIconComponent,
    PfDropdownComponent
  ],
  templateUrl: './sheet-controls.component.html',
  styleUrl: './sheet-controls.component.scss'
})
export class SheetControlsComponent {
// FIXME tutaj będzie sporo importów do wywalania, bo to będzie tylko kontener na buttony menu

}
