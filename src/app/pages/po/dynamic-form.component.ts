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
import { FieldConfig, Validator } from "../../field.interface";

export class Adresse {
  product: string;
  description: string;
  unit: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  taxCode: string;
}


@Component({
  exportAs: "dynamicFormPO",
  selector: "dynamic-form-po",
  template: `
  <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
    <ng-container *ngFor="let field of fields;" >
      <div *ngIf="field.collections === 'yes'">
        <div formArrayName="ProductDetails">
          <div *ngFor="let itemrow of adresses.controls; let i=index" >
            <div [formGroupName]="i">
              <input type="text" placeholder="Product" name="prodcut" formControlName="product">
              <input type="text" placeholder="Descriptio" name="description" formControlName="description"> 
              <input type="text" placeholder="Unit" name="unit" formControlName="unit"> 
              <input type="number" placeholder="Quantity" name="qty" formControlName="qty"> 
              <input type="number" placeholder="Unit Price" name="unitPrice" formControlName="unitPrice"> 
              <input type="number" placeholder="Total Price" name="totalPrice" formControlName="totalPrice"> 
              <input type="text" placeholder="Tax Code" name="taxCode" formControlName="taxCode"> 
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
export class DynamicFormComponentPO implements OnInit {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  manufacturerName: FormControl;
  orderid: FormControl;
  poNumber: FormControl;
  createDate: FormControl;
  issueDate: FormControl;
  supplierName: FormControl;
  supplierAddrs: FormControl;
  delivryAddrs: FormControl;
  billingAddrs: FormControl;
  ProductDetails: FormArray;
  product: FormControl;
  description: FormControl;
  unit: FormControl;
  qty: FormControl;
  unitPrice: FormControl;
  totalPrice: FormControl;
  taxCode: FormControl;
  grndTotal: FormControl;
  advPaymnt: FormControl;
  netPayable: FormControl;
  amtInWords: FormControl;
  status: FormControl;
  adresse: Adresse = new Adresse();
  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createControl(this.listAddres[0]);
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

  createControl(adresse: Adresse) {
    this.form = this.fb.group({
      manufacturerName:new FormControl(),
      orderid:new FormControl(),
      poNumber:new FormControl(),
      createDate:new FormControl(),
      issueDate:new FormControl(),
      supplierName:new FormControl(),
      supplierAddrs:new FormControl(),
      delivryAddrs:new FormControl(),
      billingAddrs:new FormControl(),
      ProductDetails: this.fb.array([this.createForms(adresse)]),    
      grndTotal:new FormControl(),
      advPaymnt:new FormControl(),
      netPayable:new FormControl(),
      amtInWords:new FormControl(),
      status:new FormControl(),
    });
    return this.form;
  }

  
  createForms(adresse): FormGroup {
    return this.fb.group({
            product: new FormControl(adresse.product),
            description: new FormControl(adresse.description ),
            unit: new FormControl(adresse.unit ),
            qty: new FormControl(adresse.qty ),
            unitPrice: new FormControl(adresse.unitPrice ),
            totalPrice: new FormControl(adresse.totalPrice ),
            taxCode: new FormControl(adresse.taxCode ),
    })
  }
  listAddres: Adresse[] = [ 
      {product:'', description:'', unit:'', qty:0, unitPrice:0, totalPrice:0, taxCode:'' }
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
