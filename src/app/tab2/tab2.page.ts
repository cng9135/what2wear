import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewEventPage } from '../view-event/view-event.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}

  async presentViewEvent() {
    const modal = await this.modalController.create({
      component: ViewEventPage
    });
    return await modal.present();
  }

}
