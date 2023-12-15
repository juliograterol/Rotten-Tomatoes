import { Component, OnInit, Input } from '@angular/core';
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
  preview: { title: any; original_title: any; poster: any } = {
    title: 'Untitled',
    original_title: 'Untitled',
    poster: '',
  };

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    if (this.type === 'movie') {
      this.preview.title = this.media.title;
      this.preview.original_title = this.media.original_title;
    }
    if (this.type === 'tv') {
      this.preview.title = this.media.name;
      this.preview.original_title = this.media.original_name;
    }
    this.preview.poster = `http://image.tmdb.org/t/p/w500${this.media.poster_path}`;
  }

  goToMedia() {
    console.log(`got to ${this.type}!`);
    console.log(this.media);
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
