import { TestBed, inject } from '@angular/core/testing';

import { BillTypeService } from './bill-type.service';

describe('BillTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillTypeService]
    });
  });

  it('should be created', inject([BillTypeService], (service: BillTypeService) => {
    expect(service).toBeTruthy();
  }));
});
