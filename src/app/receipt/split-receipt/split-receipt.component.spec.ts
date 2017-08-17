import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitReceiptComponent } from './split-receipt.component';

describe('SplitReceiptComponent', () => {
  let component: SplitReceiptComponent;
  let fixture: ComponentFixture<SplitReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
