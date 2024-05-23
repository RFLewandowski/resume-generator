import {Component} from '@angular/core';
import {NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    NgClass
  ],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  file: string = '';


  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      this.file = URL.createObjectURL(files[0]);
      this.resetInput();
    }

  }

  resetInput(){
    const input = document.getElementById('avatar-input-file') as HTMLInputElement;
    if(input){
      input.value = "";
    }
  }
}
