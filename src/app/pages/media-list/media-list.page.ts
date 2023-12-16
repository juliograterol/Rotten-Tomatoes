import { Component, OnInit } from '@angular/core';
import FetchApi from 'src/app/services/fetchapi.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.page.html',
  styleUrls: ['./media-list.page.scss'],
})
export class MediaListPage implements OnInit {
  media: any[] = [];
  page: number = 1;
  total_pages: number = 1;
  type: string = '';
  constructor(
    private fetchApi: FetchApi,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.type = params['type'];
    });
  }

  ngOnInit() {
    this.fetchMedia();
  }
  async fetchMedia() {
    const token = await this.storage.get('token');
    const userId = await this.storage.get('userId');
    const media = await this.fetchApi.request(
      'GET',
      null,
      `/media/discover?page=${this.page}&mediaType=${this.type}&userId=${userId}`,
      token
    );
    this.media = media.data.fetchData.results;
    this.total_pages = media.data.fetchData.total_pages;
    console.log(media);
  }
  goBack() {
    this.router.navigate(['tabs/discover']);
  }
  nextPage() {
    if (this.page < this.total_pages) {
      this.page += 1;
      this.fetchMedia();
    }
  }
  previousPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.fetchMedia();
    }
  }
}
