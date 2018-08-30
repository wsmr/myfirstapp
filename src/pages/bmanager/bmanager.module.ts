import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmanagerPage } from './bmanager';

@NgModule({
  declarations: [
    BmanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(BmanagerPage),
  ],
})
export class BmanagerPageModule {}
