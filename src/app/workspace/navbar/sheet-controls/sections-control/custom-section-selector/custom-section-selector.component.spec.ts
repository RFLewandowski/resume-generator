import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSectionSelectorComponent } from './custom-section-selector.component';

describe('CustomSectionSelectorComponent', () => {
  let component: CustomSectionSelectorComponent;
  let fixture: ComponentFixture<CustomSectionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSectionSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSectionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
