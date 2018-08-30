import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Platform, ActionSheetController } from 'ionic-angular';
 

import { HttpClient } from '@angular/common/http';

 

@IonicPage()
@Component({
  selector: 'page-bdetails',
  templateUrl: 'bdetails.html',
})
export class BdetailsPage {

  bchData = [];

	public name;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public platform: Platform,
      public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BdetailsPage');
    this.getData();
  }

  getData() {
        this.http.get('http://18.221.32.175/thellk/getBch.php')
          .subscribe(data => {
            this.bchData.push(data);
            console.log(this.bchData);
          })
    }






  saveData() {
  	this.http.post('http://jsonplaceholder.typicode.com/posts', { //url+phpfile name.php
      name : this.name,
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
