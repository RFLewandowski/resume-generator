import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyControlComponent } from './typography-control.component';

describe('TypographyControlComponent', () => {
  let component: TypographyControlComponent;
  let fixture: ComponentFixture<TypographyControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographyControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypographyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
