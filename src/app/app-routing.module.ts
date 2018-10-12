import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoComponent } from './pages/po/po.component';
import { InvoiceComponent } from './pages/invoice/invoice/invoice.component';  
import { InvoicePaymentComponent } from './pages/invoice/invoicePayment/invoicePayment.component';  


const routes: Routes = [
  {
    path: 'pages/po',
    component: PoComponent
  },
  {
    path: 'pages/invoice',
    component: InvoiceComponent
  },
  {
    path: 'pages/invoicePayment',
    component: InvoicePaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
