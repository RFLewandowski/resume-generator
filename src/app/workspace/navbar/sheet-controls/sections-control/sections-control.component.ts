import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sections-control',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './sections-control.component.html',
  styleUrl: './sections-control.component.scss'
})
export class SectionsControlComponent {
  column1 = [
    {label: 'Location', state: true},
    {label: 'Phone Number', state: true},
    {label: 'Email', state: true},
    {label: 'Website', state: true},
    {label: 'LinkedIn', state: true},
    {label: 'Custom 1', state: false},
    {label: 'Custom 2', state: false}
  ];

  column2 = [
    {label: 'Picture', state: true},
    {label: 'About Me', state: true},
    {label: 'Role', state: true},
    {label: 'Work Experience', state: true},
    {label: 'Education', state: true},
    {label: 'Skills', state: true},
    {label: 'Languages', state: false},
    {label: 'Hobbies', state: false}
  ];

  toggleSectionItemState(item: { label: string; state: boolean }) {
    item.state = !item.state;
  }
}
