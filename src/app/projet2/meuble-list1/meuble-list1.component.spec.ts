import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeubleList1Component } from './meuble-list1.component';

describe('MeubleList1Component', () => {
  let component: MeubleList1Component;
  let fixture: ComponentFixture<MeubleList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeubleList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeubleList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
