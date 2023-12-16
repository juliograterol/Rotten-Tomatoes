import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';

@Component({
  selector: 'create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss'],
})
export class CreateReviewComponent implements OnInit {
  @Input() mediaId: any;
  review: { userId: any; mediaId: any; content: string; rating: any } = {
    userId: '',
    mediaId: '',
    content: '',
    rating: '',
  };
  constructor(private storage: Storage, private fetchApi: FetchApi) {}

  ngOnInit() {
    this.review.mediaId = this.mediaId;
  }

  async addReview() {
    if (this.review.content && this.review.rating) {
      const token = await this.storage.get('token');
      this.review.userId = await this.storage.get('userId');
      const review = await this.fetchApi.request(
        'POST',
        this.review,
        `/review/`,
        token
      );
    }
  }
  onReviewChange(event: any) {
    this.review.content = event;
  }
  handleChange(ev: any) {
    this.review.rating = ev.target.value;
  }
  async test() {
    this.review.userId = await this.storage.get('userId');
    console.log(this.review);
  }
}
