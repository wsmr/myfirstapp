import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//import {GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';

import { BdetailsPage } from '../bdetails/bdetails';
import { EdetailsPage } from '../edetails/edetails';
import { SdetailsPage } from '../sdetails/sdetails';
import { OdetailsPage } from '../odetails/odetails';

// declare var google:any;


@IonicPage()
@Component({
  selector: 'page-bmanager',
  templateUrl: 'bmanager.html',
})
export class BmanagerPage {



//   map: GoogleMap;
//   @ViewChild('map') mapElement;
//   map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
//    this.loadMap();
//    this.initMap();

console.log('ionViewDidLoad BmanagerPage');
}

  // loadMap() {
  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //        target: {
  //          lat: 43.0741904,
  //          lng: -89.3809802
  //        },
  //        zoom: 18,
  //        tilt: 30
  //      }
  //   };
  //   this.map = GoogleMaps.create('map_canvas', mapOptions);
  //   let marker: Marker = this.map.addMarkerSync({
  //     title: 'Ionic',
  //     icon: 'blue',
  //     animation: 'DROP',
  //     position: {
  //       lat: 43.0741904,
  //       lng: -89.3809802
  //     }
  //   });
  //   marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //     alert('clicked');
  //   });
  // }

  // initMap(){
  //   let latLng =new google.maps.LatLng();
  //   let mapOption = {
  //     center:latLng,
  //     zoom:15,
  //     mapTypeId: google.map.MapTypeId.ROADMAP
  //   };
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
  // }






  bDetails(){
  	this.navCtrl.push(BdetailsPage);
  	// navigate('Branch Details');
  }

  eDetails(){
  	this.navCtrl.push(EdetailsPage);
  	// navigate('Emplyee Details');
  }

  sDetails(){
  	this.navCtrl.push(SdetailsPage);
  	// navigate('Suppliers Details');
  }

  oDetails(){
  	this.navCtrl.push(OdetailsPage);
  	// navigate('Other Branch Details');
  }

  
}
