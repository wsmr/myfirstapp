import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OdetailsPage } from './odetails';

@NgModule({
  declarations: [
    OdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(OdetailsPage),
  ],
})
export class OdetailsPageModule {}
