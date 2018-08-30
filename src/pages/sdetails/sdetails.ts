import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AddspPage } from '../addsp/addsp';

import { ModalController, Platform, ViewController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sdetails',
  templateUrl: 'sdetails.html'
})

export class SdetailsPage {

  constructor(public modalCtrl: ModalController, 
          public navCtrl: NavController, 
          public navParams: NavParams,
          public params: NavParams,
          public platform: Platform,
          public actionsheetCtrl: ActionSheetController,
          public viewCtrl: ViewController  ) 
  { }


  ionViewDidLoad() {
     console.log('ionViewDidLoad SdetailsPage');

   }

 addsp(){
      this.navCtrl.push(AddspPage);
     
      }

 }

//@IonicPage()
// @Component({
//   selector: 'page-sdetails',
//   templateUrl: 'sdetails.html',
// })
// export class SdetailsPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad SdetailsPage');
//   }

// }
