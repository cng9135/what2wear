import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewEventPage } from '../view-event/view-event.page';
import { EditEventPage } from '../edit-event/edit-event.page';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  myDate: Date = new Date();
  eventName1; eventTime1; eventLocation1;
  eventName2; eventTime2; eventLocation2;
  eventName3; eventTime3; eventLocation3;
  public eventNumber;
  public listOfKeys: string[];
   
  constructor(public modalController: ModalController, public storageService: StorageService) {
    //make date's UTC into today, since timezone is off
    let todayDateString = new String;
    this.myDate.setUTCDate(this.myDate.getDate());
    //break ISO string into substring
    todayDateString = this.myDate.toISOString().substring(0,10);
    //iterate through every event, find matching date
    this.storageService.storage.keys().then(result=> {
        this.listOfKeys = result;
        for (var i = 0; i < this.listOfKeys.length; i ++)
        {
          this.eventNumber = 1;
          this.storageService.getObject(this.listOfKeys[i]).then(result => {
           if (result != null)
           {
              if (result.date.toString().substring(0,10) == todayDateString)
              {
                console.log("event number: " + this.eventNumber);
                eval("this.eventName" + this.eventNumber + " = result.name");
                let date = new Date(result.time);
                eval("this.eventTime" + this.eventNumber + " = date");
                eval("this.eventLocation" + this.eventNumber + " = result.location");
                this.eventNumber+= 1;
              }
           }  
          }).catch(e => 
          { 
            console.log('error: ', e);
          });
        }
      }
    )
  }
  async presentViewEvent() {
    const modal = await this.modalController.create({
      component: ViewEventPage
    });
    return await modal.present();
  }

}
