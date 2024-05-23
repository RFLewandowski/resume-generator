import { Component } from '@angular/core';
import {PhotoComponent} from "./photo/photo.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    PhotoComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
