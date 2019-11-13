import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Meuble1Component } from './meuble1.component';

describe('Meuble1Component', () => {
  let component: Meuble1Component;
  let fixture: ComponentFixture<Meuble1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Meuble1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Meuble1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
