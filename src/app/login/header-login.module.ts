import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { HeaderLoginComponent } from "./header-login.component";
import { SnackBarComponent } from "./snack-bar.component";
import { DialogErrorComponent } from '../shared/dialog-error.component';
import { CreditsComponent } from '../footer/credits/credits.component';
import { WhoUsingComponent } from './who-using/who-using.component';
import { HelpComponent } from './help/help.component'

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule,
      MaterialModule
    ],
    entryComponents: [
      SnackBarComponent,
      CreditsComponent
    ],
    declarations: [
      HeaderLoginComponent,
      SignupComponent,
      SigninComponent,
      SnackBarComponent,
      WhoUsingComponent,
      HelpComponent
    ],
    exports: [
      HeaderLoginComponent,
      SignupComponent,
      SigninComponent,
      SnackBarComponent
    ],
})
export class HeaderLoginModule {}
