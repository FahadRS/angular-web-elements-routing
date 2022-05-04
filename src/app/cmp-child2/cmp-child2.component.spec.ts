import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpChild2Component } from './cmp-child2.component';

describe('CmpChild2Component', () => {
  let component: CmpChild2Component;
  let fixture: ComponentFixture<CmpChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
