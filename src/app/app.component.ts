import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WorkspaceComponent} from "./workspace/workspace.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkspaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume-generator';
}
