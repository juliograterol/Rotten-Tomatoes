import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MediaViewPageRoutingModule } from './media-view-routing.module';
import { MediaViewPage } from './media-view.page';
import { CreateReviewComponent } from 'src/app/components/create-review/create-review.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MediaViewPageRoutingModule],
  declarations: [MediaViewPage, CreateReviewComponent],
})
export class MediaViewPageModule {}
