import { Component, OnInit } from '@angular/core';
import { BillTypeService } from '../services/bill-type.service'
import { BillType } from '../../shared/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  billTypes:Observable<BillType[]>;
  stores:string[];

  constructor(private billTypeService:BillTypeService) { }

  ngOnInit() {
    this.billTypes = this.billTypeService.loadBillTypes();

    this.billTypeService.loadStores().subscribe(stores => this.stores = stores);
  }

}
