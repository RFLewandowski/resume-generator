import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorControlComponent } from './color-control.component';

describe('ColorControlComponent', () => {
  let component: ColorControlComponent;
  let fixture: ComponentFixture<ColorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
