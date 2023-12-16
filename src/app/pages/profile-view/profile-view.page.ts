import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.page.html',
  styleUrls: ['./profile-view.page.scss'],
})
export class ProfileViewPage implements OnInit {
  userInfo: any; // Declarar una propiedad para almacenar los datos de userInfo
  userId: any;
  constructor(
    private fetchApi: FetchApi,
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.userId = params['userId'];
    });
  }

  ngOnInit() {
    // if (this.userId) {
    this.fetchUser();
    // }
  }
  goBack() {
    this.router.navigate(['tabs/community']);
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
  async goToChat() {
    try {
      const myUserId = await this.storage.get('userId');
      const members = [this.userId, myUserId];
      this.router.navigate(['/chat', members]);
    } catch (error) {
      console.log('Error going to chat: ', error);
    }
  }
}
