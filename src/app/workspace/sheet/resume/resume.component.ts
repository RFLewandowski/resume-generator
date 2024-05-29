import {Component} from '@angular/core';
import {PhotoComponent} from "./photo/photo.component";
import {TimelineComponent} from "./timeline/timeline.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    PhotoComponent,
    TimelineComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
