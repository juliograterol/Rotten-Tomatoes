import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MediaViewPageRoutingModule } from './media-view-routing.module';
import { MediaViewPage } from './media-view.page';
import { CreateReviewComponent } from 'src/app/components/create-review/create-review.component';
import { SimilarComponent } from 'src/app/components/similar/similar.component';
import { SimilarMediaComponent } from 'src/app/components/similar-media/similar-media.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MediaViewPageRoutingModule],
  declarations: [
    MediaViewPage,
    CreateReviewComponent,
    SimilarComponent,
    SimilarMediaComponent,
  ],
})
export class MediaViewPageModule {}
