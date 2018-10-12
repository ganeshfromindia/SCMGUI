
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { SelectComponent } from "./components/select/select.component";
import { DateComponent } from "./components/date/date.component";
import { RadiobuttonComponent } from "./components/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { DynamicFormComponentPO   } from "./pages/po/dynamic-form.component";
import { DynamicFormComponentInvoice  } from "./pages/invoice/dynamic-form.component";

import { ApiModule  } from './api/api.module';
import { PoComponent } from './pages/po/po.component';

import { AppRoutingModule } from './app-routing.module';
import { InvoiceComponent } from './pages/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    DynamicFormComponentPO,
    DynamicFormComponentInvoice,
    PoComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ApiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class AppModule {}


