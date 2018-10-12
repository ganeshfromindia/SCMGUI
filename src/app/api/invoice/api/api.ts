export * from './invoice.service';
import { InvoiceService } from './invoice.service';
export * from './invoicePayment.service';
import { InvoicePaymentService } from './invoicePayment.service';
export const APIS = [InvoiceService, InvoicePaymentService];
