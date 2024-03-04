import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WorkspaceComponent} from "./workspace/workspace.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SheetComponent} from "./workspace/sheet/sheet.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkspaceComponent, NavbarComponent, SheetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume-generator';
}
