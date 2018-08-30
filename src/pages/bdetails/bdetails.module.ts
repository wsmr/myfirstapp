import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BdetailsPage } from './bdetails';

@NgModule({
  declarations: [
    BdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BdetailsPage),
  ],
})
export class BdetailsPageModule {}
