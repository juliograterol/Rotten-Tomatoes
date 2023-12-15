import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RottenLogoComponent } from '../icons/rotten-logo/rotten-logo.component';
import { JvLogoComponent } from '../icons/jv-logo/jv-logo.component';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [TabsPage, RottenLogoComponent, JvLogoComponent],
})
export class TabsPageModule {}
