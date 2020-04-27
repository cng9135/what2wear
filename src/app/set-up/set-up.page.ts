import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
import { Storage } from '@ionic/storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.page.html',
  styleUrls: ['./set-up.page.scss'],
})
export class SetUpPage implements OnInit {

  constructor(public modalController: ModalController, public storageService: StorageService) {}

  async presentWeather() {
    const modal = await this.modalController.create({
      component: Tab2Page
    });
    return await modal.present();
  }

  clear()
  {
    this.storageService.clear();
  }
  ngOnInit() {
  }

}

