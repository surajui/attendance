import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanepsComponent } from './chaneps.component';

describe('ChanepsComponent', () => {
  let component: ChanepsComponent;
  let fixture: ComponentFixture<ChanepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
