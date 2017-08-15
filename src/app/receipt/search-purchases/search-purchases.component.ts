import { Component, OnInit } from '@angular/core';
import { BillType } from '../../shared/interfaces';
import { billTypes } from '../../data'

@Component({
  selector: 'app-search-purchases',
  templateUrl: './search-purchases.component.html',
  styleUrls: ['./search-purchases.component.scss']
})
export class SearchPurchasesComponent implements OnInit {
  billTypes:BillType[] = billTypes;

  constructor() { }

  ngOnInit() {
  }

}
