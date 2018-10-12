import { Component, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "../../../field.interface";
import { DynamicFormComponentInvoicePayment } from "./dynamic-form.component";


@Component({
  selector: 'invoice-payment-root',
  templateUrl: './invoicePayment.component.html',
  styleUrls: ['./invoicePayment.component.scss']
})
export class InvoicePaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild(DynamicFormComponentInvoicePayment) form: DynamicFormComponentInvoicePayment;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Amount",
      inputType: "number",
      name: "amount",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Amount Required"
        },
      ]
    },
    {
      type: "input",
      label: "Deduction",
      inputType: "number",
      name: "deduction",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Deduction Required"
        },
      ]
    },
    {
      type: "input",
      label: "AIT",
      inputType: "text",
      name: "AIT",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "AIT Required"
        }
      ]
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  submit(value: any) {
    console.log(value);
  }
}
