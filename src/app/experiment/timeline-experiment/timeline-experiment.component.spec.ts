import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineExperimentComponent } from './timeline-experiment.component';

describe('TimelineExperimentComponent', () => {
  let component: TimelineExperimentComponent;
  let fixture: ComponentFixture<TimelineExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineExperimentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
