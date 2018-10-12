import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { DynamicFormComponentPO } from "./dynamic-form.component";


@Component({
  selector: "po-root",
  templateUrl: "./po.component.html",
  styleUrls: ["./po.component.scss"]
})
export class PoComponent {
  @ViewChild(DynamicFormComponentPO) form: DynamicFormComponentPO;
  regConfig: FieldConfig[] = [
    {
      collections: "no",
      type: "input",
      label: "Manufacturer Name",
      inputType: "text",
      name: "manufacturerName",
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
      type: "input",
      label: "Order Id",
      inputType: "number",
      name: "orderid",
      collections: "no",
    },
    {
      type: "input",
      label: "PO No",
      inputType: "number",
      name: "poNumber",
      collections: "no",
    },
    {
      type: "date",
      label: "Date of Creation",
      name: "createDate",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Creation Required"
        }
      ],
      collections: "no",
    },
    {
      type: "date",
      label: "Date of Issue",
      name: "issueDate",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Issue Required"
        }
      ],
      collections: "no",
    },
    {
      type: "input",
      label: "Supplier Name",
      inputType: "text",
      name: "supplierName",
      collections: "no",
    },
    {
      type: "input",
      label: "Supplier Address",
      inputType: "text",
      name: "supplierAddrs",
      collections: "no",
    },
    {
      type: "input",
      label: "Supplier Delivery Address",
      inputType: "text",
      name: "delivryAddrs",
      collections: "no",
    },
    {
      type: "input",
      label: "Supplier Billing Address",
      inputType: "text",
      name: "billingAddrs",
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
      label: "Grand Total",
      inputType: "number",
      name: "grndTotal",
      collections: "no",
    },
    {
      type: "input",
      label: "Advance Payment",
      inputType: "number",
      name: "advPaymnt",
      collections: "no",
    },
    {
      type: "input",
      label: "Net Payable",
      inputType: "number",
      name: "netPayable",
      collections: "no",
    },
    {
      type: "input",
      label: "Amount in Words",
      inputType: "text",
      name: "amtInWords",
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
    var localeCreatedDate = value.createDate.toLocaleTimeString();
    var getdate = value.createDate.getDate();
    var toLocaleCreatedString = value.createDate.toLocaleString();
    var toLocaleIssueString = value.issueDate.toLocaleString();
    var toLocaleDateString = value.createDate.toLocaleDateString();
    console.log(localeCreatedDate);
    console.log(getdate);
    console.log(toLocaleCreatedString);
    console.log(toLocaleDateString);
    // var localeCreatedDateString = localeCreatedDate.toLocaleString();
    // value.createDate = localeCreatedDateString;
    // var localeIssueDate = value.issueDate.toDate();
    // var localeIssueDateString = localeIssueDate.toLocaleString();
    // value.issueDate = localeIssueDateString;
    value.createDate = toLocaleCreatedString;
    value.issueDate = toLocaleIssueString;
    console.log(value);
  }
}
