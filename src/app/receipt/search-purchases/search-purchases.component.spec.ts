import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPurchasesComponent } from './search-purchases.component';

describe('SearchPurchasesComponent', () => {
  let component: SearchPurchasesComponent;
  let fixture: ComponentFixture<SearchPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
