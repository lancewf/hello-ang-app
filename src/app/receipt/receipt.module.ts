import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPurchasesComponent } from './search-purchases/search-purchases.component'
import { AddReceiptComponent } from './add-receipt/add-receipt.component'
import { DashboardComponent } from './dashboard/dashboard.component';

import 'hammerjs';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BillTypeService } from './services/bill-type.service';
import { SplitReceiptComponent } from './split-receipt/split-receipt.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent , }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
  ],
  providers: [BillTypeService],
  declarations: [SearchPurchasesComponent, AddReceiptComponent, DashboardComponent, SplitReceiptComponent]
})
export class ReceiptModule { }
