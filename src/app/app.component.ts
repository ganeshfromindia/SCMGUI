import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormControl, FormGroup, Validators, ValidationErrors,
  ValidatorFn, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  POForm: FormGroup;
  manufacturerName = new FormControl();
  orderid = new FormControl();
  poNumber = new FormControl();
  createDate = new FormControl();
  issueDate = new FormControl();
  supplierName = new FormControl();
  password = new FormControl();
  notification = new FormControl();
  datepickerone = new FormControl();
  chk = new FormControl();
  datepickertwochk = new FormControl();

  datetwochk = false; 
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.POForm = this.formBuilder.group({
//            firstName: ['', [Validators.required, this.PatternValidator()]],
          manufacturerName: ['', [Validators.required, Validators.pattern( /^[a-zA-Z ]*$/)]],
          orderid: ['', [Validators.required]],
          poNumber: ['', [Validators.required]],
          createDate: ['', Validators.required],
          issueDate: ['', Validators.required],
          supplierName: ['', [Validators.required, Validators.pattern( /^[a-zA-Z ]*$/)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          notification: [''],
          description: [''],
          datepickerone: ['', Validators.required],
          chk: [''],
          datepickertwochk: ['']
      });
  }

  get f() { return this.POForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.POForm.invalid) {
        return;
    }

    console.log(this.POForm);
    console.log(this.POForm.value.datepickerone.toLocaleDateString());
}

}


