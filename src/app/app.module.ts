import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import{ MaterialModule} from './material';

import { ApiModule  } from './api/api.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule, ApiModule, BrowserAnimationsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MaterialModule]
})
export class AppModule { }
