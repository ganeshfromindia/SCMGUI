import { Component, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "../../../field.interface";
import { DynamicFormComponentInvoice } from "./dynamic-form.component";


@Component({
  selector: 'invoice-root',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild(DynamicFormComponentInvoice) form: DynamicFormComponentInvoice;
  regConfig: FieldConfig[] = [
    {
      collections: "no",
      type: "input",
      label: "Supplier Name",
      inputType: "text",
      name: "nameOfSupplier",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "date",
      label: "Date of Invoice",
      name: "invoiceDate",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Invoice Required"
        }
      ],
      collections: "no",
    },
    {
      collections: "no",
      type: "input",
      label: "Invoice No",
      inputType: "text",
      name: "invoiceNumber",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Invoice No Required"
        }
      ]
    },
    {
      collections: "no",
      type: "input",
      label: "Manufacturer",
      inputType: "text",
      name: "manufacturer",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Manufacturer Required"
        }
      ]
    },
    {
      collections: "no",
      type: "input",
      label: "Manufacturer Address",
      inputType: "text",
      name: "manufacturersAddress",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Manufacturer Address"
        }
      ]
    },
    {
      collections: "no",
      type: "input",
      label: "PO No",
      inputType: "number",
      name: "poNumber",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "PO No Required"
        }
      ]
    },
    {
      type: "date",
      label: "Date of PO",
      name: "poDate",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of PO Required"
        }
      ],
      collections: "no",
    },
    {
      collections: "no",
      type: "input",
      label: "Challan No",
      inputType: "number",
      name: "challanNumber",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Challan No Required"
        }
      ]
    },
    {
      type: "date",
      label: "Date of Challan",
      name: "challanDate",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Challan Required"
        }
      ],
      collections: "no",
    },
    {
      type: "input",
      label: "product",
      inputType: "text",
      name: "product",
      collections: "yes",
    },
    {
      type: "input",
      label: "Prepared By",
      inputType: "text",
      name: "preparedBy",
      collections: "no",
    },
    {
      type: "input",
      label: "Designation",
      inputType: "text",
      name: "designation",
      collections: "no",
    },
    {
      type: "input",
      label: "Status",
      inputType: "text",
      name: "status",
      collections: "no",
    },
    {
      collections: "no",
      type: "button",
      label: "Save"
    }
  ];

  submit(value: any) {
    var toLocaleInvoiceString = value.invoiceDate.toLocaleString();
    var toLocalePOString = value.poDate.toLocaleString();
    var toLocaleChallanString = value.challanDate.toLocaleString();
    // var localeCreatedDateString = localeCreatedDate.toLocaleString();
    // value.createDate = localeCreatedDateString;
    // var localeIssueDate = value.issueDate.toDate();
    // var localeIssueDateString = localeIssueDate.toLocaleString();
    // value.issueDate = localeIssueDateString;
    value.invoiceDate = toLocaleInvoiceString;
    value.poDate = toLocalePOString;
    value.challanDate = toLocaleChallanString;
    console.log(value);
  }




}
