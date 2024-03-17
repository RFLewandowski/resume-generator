import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutControlComponent } from './layout-control.component';

describe('LayoutControlComponent', () => {
  let component: LayoutControlComponent;
  let fixture: ComponentFixture<LayoutControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
