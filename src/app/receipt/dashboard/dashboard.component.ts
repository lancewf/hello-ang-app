import { Component, OnInit } from '@angular/core';
import { tempBillTypes } from '../../data'
import { BillType } from '../../shared/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  billTypes:BillType[] = tempBillTypes;

  constructor() { }

  ngOnInit() {
  }

}
