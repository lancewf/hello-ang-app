import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BillType } from '../../shared/interfaces';
import { FormControl } from '@angular/forms';

export class SplitPurchaseFormItem {
    constructor(
      public cost: number,
      public billType: BillType,
      public notes?: string
    ) {  }
}

export class SplitPurchaseForm {
  
    constructor(
      public storeName: string,
      public date: Date,
      public totalCost: number,
      public items:SplitPurchaseFormItem[]
    ) {  }
}

@Component({
  selector: 'app-split-receipt',
  templateUrl: './split-receipt.component.html',
  styleUrls: ['./split-receipt.component.scss']
})
export class SplitReceiptComponent implements OnInit {
  @Input() billTypes:Observable<BillType[]>;
  @Input() stores: string[];
  myControl = new FormControl();
  filteredStores: Observable<string[]>;
  model = new SplitPurchaseForm('', null, null, 
    [ new SplitPurchaseFormItem(null, null, ''), 
      new SplitPurchaseFormItem(null, null, '')]);

  constructor() { }

  ngOnInit() {
  }

  filter(val: string): string[] {
    return val ? this.stores.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
    : this.stores;
  }

  onSubmit() {
    this.model = new SplitPurchaseForm('', null, null, [])
  }

}
