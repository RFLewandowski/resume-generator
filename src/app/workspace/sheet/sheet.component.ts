import {Component} from '@angular/core';
import {ResumeComponent} from "./resume/resume.component";

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    ResumeComponent
  ],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent {
}
