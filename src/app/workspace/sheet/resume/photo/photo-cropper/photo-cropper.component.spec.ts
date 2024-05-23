import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCropperComponent } from './photo-cropper.component';

describe('PhotoCropperComponent', () => {
  let component: PhotoCropperComponent;
  let fixture: ComponentFixture<PhotoCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCropperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
