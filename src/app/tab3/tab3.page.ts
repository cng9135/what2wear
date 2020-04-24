import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddEventPage } from '../tab4/add-event.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddEventPage
    });
    return await modal.present();
  }

}
