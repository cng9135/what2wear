import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-sched',
  templateUrl: 'event-sched.page.html',
  styleUrls: ['event-sched.page.scss'],
})
export class EventSchedPage{

  constructor(public modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }
  
}
