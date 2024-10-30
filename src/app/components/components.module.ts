import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignPadComponent } from './sign-pad/sign-pad.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { IonicModule } from '@ionic/angular';

const components=[
  SignPadComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,SignaturePadModule,IonicModule
  ],
  exports: [...components],
})
export class ComponentsModule { }
