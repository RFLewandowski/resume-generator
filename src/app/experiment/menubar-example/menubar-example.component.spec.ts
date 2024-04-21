import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarExampleComponent } from './menubar-example.component';

describe('MenubarExampleComponent', () => {
  let component: MenubarExampleComponent;
  let fixture: ComponentFixture<MenubarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
