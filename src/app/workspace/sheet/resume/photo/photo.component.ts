import {Component} from '@angular/core';
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {Observable} from "rxjs";
import {PhotoCropperComponent} from "./photo-cropper/photo-cropper.component";
import {DialogService} from 'primeng/dynamicdialog';


@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    NgClass
  ],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
  providers: [DialogService]
})
export class PhotoComponent {
  file: string = '';

  constructor(public dialogService: DialogService) {
  }


  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const file = URL.createObjectURL(files[0]);
      this.resetInput();
      this.openPhotoEditor(file)
        .subscribe(
          (result) => {
            if (result) {
              this.file = result;
            }
          }
        )
    }

  }

  openPhotoEditor(image: string): Observable<any> {
    const dialogRef = this.dialogService.open(
      PhotoCropperComponent, {data: image}
    );

    return dialogRef.onClose;
  }

  resetInput() {
    const input = document.getElementById('photo-input-file') as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  }
}
