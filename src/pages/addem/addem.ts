import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



import { EdetailsPage } from '../edetails/edetails';




@IonicPage()
@Component({
  selector: 'page-addem',
  templateUrl: 'addem.html',
})
export class AddemPage {

	public name;
  public nic;
  public contact;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddemPage');
  }


cancal(){
  this.navCtrl.push(EdetailsPage);
}


submit(){
   this.navCtrl.push(EdetailsPage);
//                   console.log(this.name);
//                   console.log(this.nic);
//                   console.log(this.contact);


//                 this.navCtrl.push(EdetailsPage);

//                  this.http.get('http://18.221.32.175/testapi/login.php?username='+this.name+"&password="+this.nic)
//                  .subscribe(
//                  (data) => {
//                            if(data.status === 201) {
//                                this.presentLoading();
//                                 this.navCtrl.push(EdetailsPage);

//                              this.loader.dismiss();
//                         }
                               

//                             else {

                              //this.presentLoading();
                              //alert('Username or password wrong');
//                                   }
                  
//                       }
//                    );
//                  }


//   saveData() {
//   	this.http.post('http://jsonplaceholder.typicode.com/posts', { //url+phpfile name.php
//       name : this.name,
//       body: 'bar',
//       userId: 1
//     })
//       .subscribe(
//         res => {
//           console.log(res);
//         },
//         err => {
//           console.log("Error occured");
//         }
//       );
   }

 }
