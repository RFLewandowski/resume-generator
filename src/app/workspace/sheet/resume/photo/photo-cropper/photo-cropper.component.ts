import {AfterViewInit, Component, OnInit} from '@angular/core';
import Cropper from 'cropperjs';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ButtonModule} from "primeng/button";


@Component({
  selector: 'app-photo-cropper',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './photo-cropper.component.html',
  styleUrl: './photo-cropper.component.scss',
  providers: [DialogService]
})
export class PhotoCropperComponent implements OnInit, AfterViewInit {
  cropper!: Cropper;
  sanitizedUrl: SafeUrl | any;

  constructor(
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.config.data);
  }


  ngAfterViewInit() {
    this.initCropper();
  }

  initCropper() {
    const image = document.getElementById('image') as HTMLImageElement;
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      guides: false,

    });
  }

  // make the crop box rounded
  getRoundedCanvas(sourceCanvas: any) {
    var canvas = document.createElement('canvas');
    var context: any = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(
      width / 2,
      height / 2,
      Math.min(width, height) / 2,
      0,
      2 * Math.PI,
      true
    );
    context.fill();
    return canvas;
  }

//get the cropped image and closes the dialog
//returning an url or null if no image

  crop() {
    const croppedCanvas = this.cropper.getCroppedCanvas();
    const roundedCanvas = this.getRoundedCanvas(croppedCanvas);

    let roundedImage = document.createElement('img');

    if (roundedImage) {
      this.ref.close(roundedCanvas.toDataURL());
    } else {
      return this.ref.close(null);
    }
  }

// resets the cropper
  reset() {
    this.cropper.clear();
    this.cropper.crop();
  }

}
