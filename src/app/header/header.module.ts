import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { HeaderComponent } from "./header.component";

@NgModule({
    imports: [
      BrowserModule,
      MaterialModule,
      BrowserAnimationsModule
    ],
    declarations: [
      HeaderComponent
    ],
    exports: [
      HeaderComponent
    ]
})
export class HeaderModule {}
