import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { BmanagerPage } from '../pages/bmanager/bmanager';
import { BdetailsPage } from '../pages/bdetails/bdetails';
import { EdetailsPage } from '../pages/edetails/edetails';
import { SdetailsPage } from '../pages/sdetails/sdetails';
import { OdetailsPage } from '../pages/odetails/odetails';
import { AddemPage    } from '../pages/addem/addem';
import { AddspPage    } from '../pages/addsp/addsp';
import { SettingPage } from '../pages/setting/setting';
import { ManualPage } from '../pages/manual/manual';
import { TabPage } from '../pages/tab/tab';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BmanagerPage,
    BdetailsPage,
    EdetailsPage,
    SdetailsPage,
    OdetailsPage,
    AddemPage,
    AddspPage,
    TabPage,
    SettingPage,
    ManualPage

  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BmanagerPage,
    BdetailsPage,
    EdetailsPage,
    SdetailsPage,
    OdetailsPage,
    AddemPage,
    AddspPage,
    TabPage,
    SettingPage,
    ManualPage


  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})

export class AppModule {}
