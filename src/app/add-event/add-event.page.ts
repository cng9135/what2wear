import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event.page.html',
  styleUrls: ['add-event.page.scss'],
})
export class AddEventPage{
  newEvent = <any>{};
  theDate = new Date().toISOString;
  constructor(public modalController: ModalController, public storageService: StorageService) {}

  async closeModal() {
    await this.modalController.dismiss();
  }
  

  
  async addEvent() {
    let nevent = this.newEvent;
    this.storageService.setObject(this.newEvent.name,nevent);
    this.storageService.getObject(this.newEvent.name).then(result => {
      
      if (result != null) {

        console.log('console testing' + result);


      }  
      }).catch(e => { 
        console.log('error: ', e);
     });
     await this.modalController.dismiss();
    }
    
  }



