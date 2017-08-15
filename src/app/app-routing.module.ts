import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'class', pathMatch: 'full' },
  { path: 'class', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }, 
  { path: 'receipt', loadChildren: 'app/receipt/receipt.module#ReceiptModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
