import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

	

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

	public isSearchbarOpened = false;

  constructor(private navParams: NavParams, private view: ViewController) {
  }


ionViewWillLoad() {
  const data = this.navParams.get('data');
  console.log(data);
//    console.log('ionViewDidLoad ModalPage');
  }


closeModal(){
  const data = {
    name:'janaka rathnasekara',
    occupation: 'good man'
  };
  this.view.dismiss(data);

}

onSearch(event){
	console.log(event.target.value);


}

  
}
