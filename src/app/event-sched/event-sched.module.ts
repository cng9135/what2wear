import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventSchedPage } from './event-sched.page';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: EventSchedPage }])
  ],
  declarations: [EventSchedPage]
})
export class EventSchedPageModule {}
