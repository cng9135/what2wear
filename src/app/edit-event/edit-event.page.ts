import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage{
  eventName: string;
  newEvent = <any>{};
  eventLocation; eventTime; eventBring; eventNotes; eventDress;
  constructor(public modalController: ModalController, public storageService: 
    StorageService, public navParams: NavParams) { 
      this.eventName = navParams.get('eventName');
      this.storageService.getObject(this.eventName).then(result => {
          let date = new Date(result.time);
          this.eventTime= date;
          this.eventLocation = result.location;
          this.eventBring = result.bring;
          this.eventNotes = result.notes;
          this.eventDress = result.dress;
          }
        ).catch(e => 
          { 
            console.log('error: ', e);
          });
        }
  
  


    async editEvent() {
    this.storageService.remove(this.eventName);
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
    
  async closeModal() {
    await this.modalController.dismiss();
  }
  
  
}
