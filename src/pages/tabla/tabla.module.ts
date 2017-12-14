import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablaPage } from './tabla';

@NgModule({
  declarations: [
    TablaPage,
  ],
  imports: [
    IonicPageModule.forChild(TablaPage),
  ],
})
export class TablaPageModule {}
