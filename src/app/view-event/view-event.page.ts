import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EditEventPage } from '../edit-event/edit-event.page';

@Component({
  selector: 'app-view-event',
  templateUrl: 'view-event.page.html',
  styleUrls: ['view-event.page.scss'],
})
export class ViewEventPage {

  constructor(public modalController: ModalController) {}
  async presentEditEvent() {
    const modal = await this.modalController.create({
      component: EditEventPage
    });
    return await modal.present();
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

}
