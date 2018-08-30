import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddemPage } from './addem';

@NgModule({
  declarations: [
    AddemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddemPage),
  ],
})
export class AddemPageModule {}
