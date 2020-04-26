import {IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SetUpPageRoutingModule } from './set-up-routing.module';
import {SetUpPage} from './set-up.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SetUpPageRoutingModule
  ],
  declarations: [SetUpPage]
})
export class SetUpPageModule {}
