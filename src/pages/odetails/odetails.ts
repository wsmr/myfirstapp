import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Modal, ModalController } from 'ionic-angular';
/**
 * Generated class for the OdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-odetails',
  templateUrl: 'odetails.html',
})
export class OdetailsPage {



  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				private modal: ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OdetailsPage');
  }

openModal(){
	const myData = {
		name:'sahan madusanka',
		occupation: 'developer'
	};
	const myModal: Modal = this.modal.create('ModalPage', {data: myData});
	myModal.present();

	myModal.onDidDismiss((data) => {
		console.log("i have dismissed.");
		console.log(data);

	});

	myModal.onWillDismiss((data) => {
		console.log("i am about dismiss");
		console.log(data);
	});


}


}
