import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItemDetailsComponent } from './event-item-details.component';

describe('EventItemDetailsComponent', () => {
  let component: EventItemDetailsComponent;
  let fixture: ComponentFixture<EventItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
