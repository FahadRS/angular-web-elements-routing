import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpParentComponent } from './cmp-parent.component';

describe('CmpParentComponent', () => {
  let component: CmpParentComponent;
  let fixture: ComponentFixture<CmpParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
