import { Component, OnInit, Input } from '@angular/core';
import { BillType } from '../../shared/interfaces';

@Component({
  selector: 'app-search-purchases',
  templateUrl: './search-purchases.component.html',
  styleUrls: ['./search-purchases.component.scss']
})
export class SearchPurchasesComponent implements OnInit {
  @Input() billTypes:BillType[];

  constructor() { }

  ngOnInit() {
  }

}
