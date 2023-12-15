import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MediaListPageRoutingModule } from './media-list-routing.module';
import { MediaListPage } from './media-list.page';
import { MediaColumnComponent } from 'src/app/components/media-column/media-column.component';
import { MediaListItemComponent } from 'src/app/components/media-list-item/media-list-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MediaListPageRoutingModule],
  declarations: [MediaListPage, MediaColumnComponent, MediaListItemComponent],
})
export class MediaListPageModule {}
