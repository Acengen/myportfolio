import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProdComponent } from './single-prod.component';

describe('SingleProdComponent', () => {
  let component: SingleProdComponent;
  let fixture: ComponentFixture<SingleProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
