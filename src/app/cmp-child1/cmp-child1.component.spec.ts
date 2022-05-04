import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpChild1Component } from './cmp-child1.component';

describe('CmpChild1Component', () => {
  let component: CmpChild1Component;
  let fixture: ComponentFixture<CmpChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
