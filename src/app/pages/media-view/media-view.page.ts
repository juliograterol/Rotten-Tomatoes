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
    const media = await this.fetchApi.request(
      'GET',
      null,
      `/media/data/${this.mediaId}?mediaType=${this.type}`,
      token
    );
    this.media = media.data.Media;
    this.poster = `http://image.tmdb.org/t/p/w500${this.media.posterUrl}`;
    const dateString = this.media.releaseDate;
    const date = new Date(dateString);
    this.mediaDate = date.toLocaleDateString();
  }
}
