import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { TabPage } from '../tab/tab';


import { LoadingController } from 'ionic-angular';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username;
  public password;

//  loading :any;
//  onfulfilled : any;




  constructor(public navCtrl: NavController,
              public http: Http,
              public loadingCtrl: LoadingController ) {

  }

 presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
      loader.present()    //.then(this.onfulfilled    () => {

         // this.loginCheck();
   // });

      


                  }

loginCheck() {
                  console.log(this.username);
                  console.log(this.password);


                 //this.navCtrl.push(TabPage);

                  this.http.get('http://18.221.32.175/testapi/login.php?username='+this.username+"&password="+this.password)
                  .subscribe(
                  (data) => {
                             if(data.status === 201) {
                                 this.presentLoading();
                                 this.navCtrl.push(TabPage);

                              //this.loader.dismiss();
                         }
                               

                             else {

                              //this.presentLoading();
                              alert('Username or password wrong');
                                   }
                  
                       }
                    );
                  }


  signCheck(){
    alert('Contact Administrator');
  }

  
 }
