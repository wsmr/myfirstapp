import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Platform, ActionSheetController } from 'ionic-angular';
import { AddemPage } from '../addem/addem';

// 1
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';


  @IonicPage()
  @Component(
  {
    selector: 'page-edetails',
    templateUrl: 'edetails.html',
  }	)

  export class EdetailsPage {

    empData = [];

    constructor(public navCtrl: NavController, public navParams: NavParams,
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController,
      public http: HttpClient) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad EdetailsPage');
      this.getData();
    }

    addem(){
    	this.navCtrl.push(AddemPage);
    	// navigate('Branch Details');
    }


    openMenu() {
      let actionSheet = this.actionsheetCtrl.create({

        title: 'Action',
        cssClass: 'action-sheets-basic-page',
        buttons: [
        {
          text: 'View',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'build' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Delete',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Contact',
          icon: !this.platform.is('ios') ? 'call' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
        ]
      });

      actionSheet.present();
    }

    getData() {
        this.http.get('http://18.221.32.175/thellk/getEmp.php')
          .subscribe(data => {
            this.empData.push(data);
            console.log(this.empData);
          })
    }
  }