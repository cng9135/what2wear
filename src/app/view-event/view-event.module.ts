import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewEventPage } from './view-event.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AddEventPage } from '../add-event/add-event.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ViewEventPage }])
  ],
  declarations: [ViewEventPage]
})
export class ViewEventPageModule {}
