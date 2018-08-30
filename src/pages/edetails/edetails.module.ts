import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdetailsPage } from './edetails';

@NgModule({
  declarations: [
    EdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EdetailsPage),
  ],
})
export class EdetailsPageModule {}
