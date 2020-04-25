import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-event',
  templateUrl: 'view-event.page.html',
  styleUrls: ['view-event.page.scss'],
})
export class ViewEventPage {

  constructor(public modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
