import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BillType } from '../../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

export class PurchaseForm {
  
    constructor(
      public storeName: string,
      public cost: number,
      public billType: BillType,
      public date: Date,
      public notes?: string
    ) {  }
}

@Component({
  selector: 'add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.scss']
})
export class AddReceiptComponent implements OnInit {
  @Input() billTypes:Observable<BillType[]>;
  @Input() stores: string[];
  myControl = new FormControl();
  filteredStores: Observable<string[]>;

  model = new PurchaseForm('', null, null, null, '');

  constructor() { 
    this.myControl = new FormControl();
    this.filteredStores = this.myControl.valueChanges
        .startWith(null)
        .map(name => this.filter(name));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.model = new PurchaseForm('', null, null, null, '')
  }
  
  filter(val: string): string[] {
    return val ? this.stores.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
    : this.stores;
  }
}
