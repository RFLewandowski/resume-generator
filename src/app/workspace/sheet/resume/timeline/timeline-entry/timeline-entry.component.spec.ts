import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEntryComponent } from './timeline-entry.component';

describe('TimelineEntryComponent', () => {
  let component: TimelineEntryComponent;
  let fixture: ComponentFixture<TimelineEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
