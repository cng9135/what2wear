import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewEventPage } from './view-event.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ViewEventPage }])
  ],
  declarations: [ViewEventPage]
})
export class ViewEventPageModule {}
