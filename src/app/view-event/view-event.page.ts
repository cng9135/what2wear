import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EditEventPage } from '../edit-event/edit-event.page';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-view-event',
  templateUrl: 'view-event.page.html',
  styleUrls: ['view-event.page.scss'],
})
export class ViewEventPage {
  eventName: string;
  eventLocation; eventTime; eventBring; eventNotes;

  constructor(public modalController: ModalController, public storageService: StorageService, public navParams: NavParams) {
   this.eventName = navParams.get('eventName');
    this.storageService.getObject(this.eventName).then(result => {
        let date = new Date(result.time);
        this.eventTime= date;
        this.eventLocation = result.location;
        this.eventBring = result.bring;
        this.eventNotes = result.notes;
        }
      ).catch(e => 
        { 
          console.log('error: ', e);
        });
      }
     
    

  
  async presentEditEvent() {
    const modal = await this.modalController.create({
      component: EditEventPage
    });
    return await modal.present();
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  clear()
  {
    this.storageService.clear();
  }
}
