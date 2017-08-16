import { Component, OnInit, Input, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { MdInputModule, MdCheckboxModule} from '@angular/material';
import { BillType, Purchase } from '../../shared/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.scss']
})
export class AddReceiptComponent implements OnInit {
  addReceiptFormGroup: FormGroup;
  @Input() billTypes:BillType[];

  constructor(fb: FormBuilder) { 
    this.addReceiptFormGroup = fb.group({
      storeName: ['', Validators.required],
      cost: ['', Validators.required],
      date: ['', Validators.required],
      billType: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Form Submitted', this.addReceiptFormGroup.value);
  }

}
