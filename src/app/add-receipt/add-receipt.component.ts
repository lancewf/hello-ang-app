import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import {MdInputModule, MdCheckboxModule} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.scss']
})
export class AddReceiptComponent implements OnInit {
  name:string

  foods = ["klsdfj", "kjdf"];

  constructor() { 
    this.name = "";
  }

  ngOnInit() {
  }

  onSubmit(){
    console.info("onSubmit");
  }

}
