import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";
import { FieldConfig, Validator } from "../../../field.interface";

export class Adresse {
  particularsOfGoodsService: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
  vat: number;
  tax: number;
  grandTotal: number;
  advancePayment: number;
  totalPayable: number;
  AmountInWords: string;
}


@Component({
  exportAs: "dynamicFormInvoice",
  selector: "dynamic-form-invoice",
  template: `
  <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
    <ng-container *ngFor="let field of fields;" >
      <div *ngIf="field.collections === 'yes'">
        <div formArrayName="ProductDetails">
          <div *ngFor="let itemrow of adresses.controls; let i=index" >
            <div [formGroupName]="i">
              <input type="text" placeholder="Particulars" name="particularsOfGoodsService" formControlName="particularsOfGoodsService">
              <div *ngIf="itemrow.controls.particularsOfGoodsService.dirty">
                <div *ngIf="itemrow.hasError('required', 'particularsOfGoodsService')">Particulars are required</div>              
              </div>
              <input type="number" placeholder="Quanity" name="quantity" formControlName="quantity"> 
              <input type="text"  placeholder="Unit" name="unit" formControlName="unit"> 
              <input type="number" placeholder="Unit Price" name="unitPrice" formControlName="unitPrice"> 
              <input type="number" placeholder="Total Price" name="totalPrice" formControlName="totalPrice"> 
              <input type="number" placeholder="Vat" name="vat" formControlName="vat"> 
              <input type="number" placeholder="Tax" name="tax" formControlName="tax"> 
              <input type="number" placeholder="Grand Total" name="grandTotal" formControlName="grandTotal"> 
              <input type="number" placeholder="Advance Payment" name="advancePayment" formControlName="advancePayment"> 
              <input type="number" placeholder="Total Payable" name="totalPayable" formControlName="totalPayable"> 
              <input type="text" placeholder="Amt In Words" name="AmountInWords" formControlName="AmountInWords"> 
            </div>
            <button type="button"  (click)="add();">Add More PO Details</button>
            <button type="button"  (click)="removeAddress(i);">Delete PO Details</button>
          </div>
        </div>
      </div>
      <div *ngIf="field.collections === 'no'">
        <div dynamicField [field]="field" [group]="form">
        </div>
      </div>
    </ng-container>
  </form>
  `,
  styles: []
})
export class DynamicFormComponentInvoice implements OnInit {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  nameOfSupplier: FormControl;
  invoiceDate: FormControl;
  invoiceNumber: FormControl;
  manufacturer: FormControl;
  manufacturersAddress: FormControl;
  poNumber: FormControl;
  poDate: FormControl;
  challanNumber: FormControl;
  challanDate: FormControl;
  ProductDetails: FormArray;
  particularsOfGoodsService: FormControl;
  quantity: FormControl;
  unit: FormControl;
  unitPrice: FormControl;
  totalPrice: FormControl;
  vat: FormControl;
  tax: FormControl;
  grandTotal: FormControl;
  advancePayment: FormControl;
  totalPayable: FormControl;
  AmountInWords: FormControl;
  preparedBy: FormControl;
  designation: FormControl;
  status: FormControl;
  adresse: Adresse = new Adresse();
  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createControl(this.listAddres[0]);
    //this.form.setControl('ProductDetails', this.fb.array((this.listAddres || []).map((x) => this.fb.group(x))));
  }



  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  // createControl(adresse: Adresse) {
  //   this.form = this.fb.group({
  //     nameOfSupplier:new FormControl(),
  //     invoiceDate:new FormControl(),
  //     invoiceNumber:new FormControl(),
  //     manufacturer:new FormControl(),
  //     manufacturersAddress:new FormControl(),
  //     poNumber:new FormControl(),
  //     poDate:new FormControl(),
  //     challanNumber:new FormControl(),
  //     challanDate:new FormControl(),
  //     ProductDetails: this.fb.array([this.createForms(adresse)]),    
  //     preparedBy:new FormControl(),
  //     designation:new FormControl(),
  //     status:new FormControl(),
  //   });
  //   return this.form;
  // }

 
  createControl(adresse: Adresse) {
    const group = this.fb.group({ProductDetails: this.fb.array([this.createForms(adresse)])});
    this.ProductDetails = this.fb.array([this.createForms(adresse)]),    
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }



  createForms(adresse): FormGroup {
    return this.fb.group({
            particularsOfGoodsService: ['', Validators.required],
            quantity: new FormControl(adresse.quantity ),
            unit: new FormControl(adresse.unit ),
            unitPrice: new FormControl(adresse.unitPrice ),
            totalPrice: new FormControl(adresse.totalPrice ),
            vat: new FormControl(adresse.vat ),
            tax: new FormControl(adresse.tax ),
            grandTotal: new FormControl(adresse.grandTotal ),
            advancePayment: new FormControl(adresse.advancePayment ),
            totalPayable: new FormControl(adresse.totalPayable ),
            AmountInWords: new FormControl(adresse.AmountInWords ),
    })
  }
  listAddres: Adresse[] = [ 
      {particularsOfGoodsService:'', quantity:0, unit:'', unitPrice:0, totalPrice:0, vat:0, 
      tax:0 , grandTotal:0 , advancePayment:0 , totalPayable:0 , AmountInWords:'' }
  ];

  get adresses() {
    return this.form.get('ProductDetails') as FormArray;
  }

  add() {
     this.adresses.push(this.createForms(this.adresse));
  }

  removeAddress(i: number) {  
    const control = <FormArray>this.form.controls['ProductDetails'];
    control.removeAt(i);
  }


  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
