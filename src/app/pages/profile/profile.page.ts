import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private router: Router, private storage: Storage) {}

  myUserId: any;

  ngOnInit() {
    this.fetchMyUser();
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.fetchMyUser();
    }, 2000);
  }
  async logOut() {
    await this.storage.remove('token');
    this.router.navigate(['login']);
  }
  async fetchMyUser() {
    // const userId = await this.storage.get('userId');
    this.myUserId = await this.storage.get('userId');
    // console.log('User ID: ', userId);
  }

  editProfile() {
    this.router.navigate(['edit-profile']);
  }
}
