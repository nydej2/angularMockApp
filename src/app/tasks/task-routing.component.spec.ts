import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRoutingComponent } from './task-routing.component';

describe('TaskRoutingComponent', () => {
  let component: TaskRoutingComponent;
  let fixture: ComponentFixture<TaskRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
