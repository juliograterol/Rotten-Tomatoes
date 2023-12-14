import { Component, OnInit, Input } from '@angular/core';
import FetchApi from 'src/app/services/fetchapi.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() userId: any;

  userInfo: any; // Declarar una propiedad para almacenar los datos de userInfo

  constructor(
    private fetchApi: FetchApi,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    // if (this.userId) {
    this.fetchUser();
    // }
  }

  async fetchUser() {
    const token = await this.storage.get('token');
    // console.log(this.userId);
    const userInfo = await this.fetchApi.request(
      'GET',
      null,
      `/user/profile/${this.userId}`,
      token
    );

    if (userInfo && userInfo.data) {
      this.userInfo = userInfo.data;
      if (userInfo.data.profilePicture === '') {
        this.userInfo.profilePicture =
          'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
      }
      console.log(userInfo.data);
    }
  }
}
