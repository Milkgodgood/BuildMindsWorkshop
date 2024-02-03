import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipReceivedComponent } from './membership-received.component';

describe('MembershipReceivedComponent', () => {
  let component: MembershipReceivedComponent;
  let fixture: ComponentFixture<MembershipReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembershipReceivedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
