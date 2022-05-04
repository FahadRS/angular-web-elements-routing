import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpChild3Component } from './cmp-child3.component';

describe('CmpChild3Component', () => {
  let component: CmpChild3Component;
  let fixture: ComponentFixture<CmpChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpChild3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
