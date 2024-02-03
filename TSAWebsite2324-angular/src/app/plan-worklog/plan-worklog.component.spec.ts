import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWorklogComponent } from './plan-worklog.component';

describe('PlanWorklogComponent', () => {
  let component: PlanWorklogComponent;
  let fixture: ComponentFixture<PlanWorklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanWorklogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanWorklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
