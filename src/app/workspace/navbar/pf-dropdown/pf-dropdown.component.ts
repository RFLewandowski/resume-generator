import { Component } from '@angular/core';
import {SvgIconComponent} from "../../../svg-icon/svg-icon.component";
import {StyleClassModule} from "primeng/styleclass";

@Component({
  selector: 'app-pf-dropdown',
  standalone: true,
  imports: [
    SvgIconComponent,
    StyleClassModule
  ],
  templateUrl: './pf-dropdown.component.html',
  styleUrl: './pf-dropdown.component.scss'
})
export class PfDropdownComponent {

}
