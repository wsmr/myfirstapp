import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google:any;


@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {

	@ViewChild('map') mapRef:ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  	this.DisplayMap();
   console.log(this.mapRef);
  }

  DisplayMap(){
  	const location = new google.maps.LatLng('6.888670','79.930818');
  	const options = {	center: location, zoom: 10};
  	const map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

}
