import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BillType } from '../../shared/interfaces';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { fakeBillTypes, fakeStores } from './data';
import 'rxjs/add/observable/of';

const BILL_TYPES_API_URL = 'http://moneyreport.sjcmmsn.com/index.php/services/getBillTypes';
const STORES_API_URL = 'http://moneyreport.sjcmmsn.com/index.php/services/stores';

@Injectable()
export class BillTypeService {

  constructor(private http: Http) { }

  loadBillTypes(): Observable<BillType[]> {
    return Observable.of(fakeBillTypes);
    //return this.http.get(BILL_TYPES_API_URL).map(res => res.json());
  }

  loadStores(): Observable<string[]> {
    let stores = fakeStores.split(';');
    
    // return this.http.get(STORES_API_URL).map(res => res.text().split(';'));
    return Observable.of(stores);
  }
}
