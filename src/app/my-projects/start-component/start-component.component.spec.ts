import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponentComponent } from './start-component.component';

describe('StartComponentComponent', () => {
  let component: StartComponentComponent;
  let fixture: ComponentFixture<StartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
