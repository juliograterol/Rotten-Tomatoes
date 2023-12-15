import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DiscoverPageRoutingModule } from './discover-routing.module';
import { DiscoverPage } from './discover.page';
import { MediaComponent } from 'src/app/components/media/media.component';
import { MediaRowComponent } from 'src/app/components/media-row/media-row.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DiscoverPageRoutingModule],
  declarations: [DiscoverPage, MediaComponent, MediaRowComponent],
})
export class DiscoverPageModule {}
