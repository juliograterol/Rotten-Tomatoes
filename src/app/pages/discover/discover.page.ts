import { Component, OnInit } from '@angular/core';
import FetchApi from 'src/app/services/fetchapi.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  moviesInfo: any[] = [];
  tvShowsInfo: any[] = [];

  constructor(
    private fetchApi: FetchApi,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchMovieDiscover();
    this.fetchTvDiscover();
  }
  async redirectTo(type: string) {
    // this.router.navigateByUrl('media');
    this.router.navigate(['media', type]);
  }
  async fetchMovieDiscover() {
    const token = await this.storage.get('token');
    const userId = await this.storage.get('userId');
    const media = await this.fetchApi.request(
      'GET',
      null,
      `/media/discover?mediaType=movie&userId=${userId}`,
      token
    );
    this.moviesInfo = media.data.fetchData.results;
  }
  async fetchTvDiscover() {
    const token = await this.storage.get('token');
    const userId = await this.storage.get('userId');
    const media = await this.fetchApi.request(
      'GET',
      null,
      `/media/discover?mediaType=tv&userId=${userId}`,
      token
    );
    this.tvShowsInfo = media.data.fetchData.results;
  }
}
