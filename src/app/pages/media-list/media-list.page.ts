import { Component, OnInit, ViewChild } from '@angular/core';
import FetchApi from 'src/app/services/fetchapi.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular'; // Importa IonContent
import { movieGenders } from './genders';
import { tvGenders } from './genders';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.page.html',
  styleUrls: ['./media-list.page.scss'],
})
export class MediaListPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent; // ViewChild para obtener la referencia a IonContent
  media: any[] = [];
  movieGenders: any = movieGenders;
  tvGenders: any = tvGenders;
  selectedGenders: number[] = []; // Variable para almacenar los géneros seleccionados
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
  handleGenderSelection() {
    console.log('Genders selected:', this.selectedGenders);
    this.fetchMedia();
  }
  async fetchMedia() {
    let genders = '';
    if (this.selectedGenders !== null) {
      genders = `&genres=${this.selectedGenders}`;
    }
    console.log(genders);
    const token = await this.storage.get('token');
    const userId = await this.storage.get('userId');
    const media = await this.fetchApi.request(
      'GET',
      null,
      `/media/discover?page=${this.page}&mediaType=${this.type}&userId=${userId}${genders}`,
      token
    );
    this.media = media.data.fetchData.results;
    this.total_pages = media.data.fetchData.total_pages;
    this.content.scrollToTop();
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
