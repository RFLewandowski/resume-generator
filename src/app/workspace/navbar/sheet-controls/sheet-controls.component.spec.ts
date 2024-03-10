import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetControlsComponent } from './sheet-controls.component';

describe('SheetControlsComponent', () => {
  let component: SheetControlsComponent;
  let fixture: ComponentFixture<SheetControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SheetControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
