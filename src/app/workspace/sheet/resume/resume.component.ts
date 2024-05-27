import { Component } from '@angular/core';
import {PhotoComponent} from "./photo/photo.component";
import {TimelineExperimentComponent} from "../../../experiment/timeline-experiment/timeline-experiment.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    PhotoComponent,
    TimelineExperimentComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
