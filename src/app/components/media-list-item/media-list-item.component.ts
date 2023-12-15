import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'media-list-item',
  templateUrl: './media-list-item.component.html',
  styleUrls: ['./media-list-item.component.scss'],
})
export class MediaListItemComponent implements OnInit {
  @Input() media: any;
  @Input() type: any;
  preview: { title: any; original_title: any; poster: any; overview: any } = {
    title: 'Untitled',
    original_title: 'Untitled',
    poster: '',
    overview: 'No overview',
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
    this.preview.overview = this.media.overview;
  }

  goToMedia() {
    this.router.navigate(['media-view', this.type, this.media.id]);
  }
}
