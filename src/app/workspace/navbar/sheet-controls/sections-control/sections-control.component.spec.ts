import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsControlComponent } from './sections-control.component';

describe('SectionsControlComponent', () => {
  let component: SectionsControlComponent;
  let fixture: ComponentFixture<SectionsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionsControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
