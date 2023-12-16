import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';

@Component({
  selector: 'app-media-view',
  templateUrl: './media-view.page.html',
  styleUrls: ['./media-view.page.scss'],
})
export class MediaViewPage implements OnInit {
  type: any;
  mediaId: any;
  media: any;
  poster: any;
  mediaDate: any;
  reviewed: boolean = false;
  myUser: any;
  allReviews: any[] = [];
  review: { userId: any; mediaId: any; content: string; rating: any } = {
    userId: '',
    mediaId: '',
    content: '',
    rating: '',
  };
  constructor(
    private storage: Storage,
    private fetchApi: FetchApi,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.type = params['type'];
      this.mediaId = params['mediaId'];
    });
  }
  ngOnInit() {
    this.fetchMedia();
  }
  goBack() {
    this.router.navigate(['media', this.type]);
  }
  async fetchMedia() {
    const token = await this.storage.get('token');
    const userId = await this.storage.get('userId');
    const media = await this.fetchApi.request(
      'GET',
      null,
      `/media/data/${this.mediaId}?mediaType=${this.type}&userId=${userId}`,
      token
    );
    this.media = media.data.Media;
    //allReviews
    this.allReviews = media.data.reviews;
    //myReview
    if (media.data.myReview) {
      this.review = media.data.myReview;
      this.myUser = this.review.userId;
      this.reviewed = true;
    } else {
      const userInfo = await this.fetchApi.request(
        'GET',
        null,
        `/user/profile/${userId}`,
        token
      );
      this.myUser = userInfo.data;
      if (this.myUser.profilePicture === '') {
        this.myUser.profilePicture =
          'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
      }
    }
    this.poster = `http://image.tmdb.org/t/p/w500${this.media.posterUrl}`;
    const dateString = this.media.releaseDate;
    const date = new Date(dateString);
    this.mediaDate = date.toLocaleDateString();
  }
  getStarArray(rating: any): any[] {
    return Array.from({ length: rating }, (_, index) => index);
  }
}
