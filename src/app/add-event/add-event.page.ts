import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event.page.html',
  styleUrls: ['add-event.page.scss'],
})
export class AddEventPage{
  newEvent = <any>{};

  constructor(public modalController: ModalController) {}

  async closeModal() {
    await this.modalController.dismiss();
  }
  

  addEvent() {
    let nevent = this.newEvent;
    console.log(nevent);
  }
}

