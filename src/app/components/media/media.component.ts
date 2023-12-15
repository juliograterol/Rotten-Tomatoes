import { Component, OnInit, Input } from '@angular/core';
import FetchApi from 'src/app/services/fetchapi.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  @Input() media: any;
  @Input() type: any;
  preview: { title: any; poster: any } = {
    title: 'Untitled',
    poster: '',
  };

  constructor(
    private fetchApi: FetchApi,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.type === 'movie') {
      this.preview.title = this.media.original_title;
    }
    if (this.type === 'tv') {
      this.preview.title = this.media.original_name;
    }
    this.preview.poster = `http://image.tmdb.org/t/p/w500${this.media.poster_path}`;
  }

  async fetchMedia() {
    const token = await this.storage.get('token');
    // const media = await this.fetchApi.request(
    //   'GET',
    //   null,
    //   `/media/data/${this.mediaId}?mediaType=${this.mediaType}`,
    //   token
    // );
    // this.mediaData = media.data.Media;
    // this.media.poster = `http://image.tmdb.org/t/p/w500${this.mediaData.posterUrl}`;
    // this.media.title = this.mediaData.title;
    // console.log(media.data.Media);
  }
}
