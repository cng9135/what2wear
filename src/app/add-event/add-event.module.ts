import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddEventPage } from './add-event.page';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AddEventPage }])
  ],
  declarations: [AddEventPage]
})
export class AddEventPageModule {}
