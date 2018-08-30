import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BmanagerPage } from '../bmanager/bmanager';
import { SettingPage } from '../setting/setting';
import { ManualPage } from '../manual/manual';



@Component({
	templateUrl: 'tab.html'
})
export class TabPage {


	tab1root = BmanagerPage;
	tab2root = SettingPage;
	tab3root = ManualPage;
  
  constructor(){
  }
}
