import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent implements OnInit {
  @Input() user: any;
  picture: string = '';
  constructor(
    private fetchApi: FetchApi,
    private router: Router,
    private storage: Storage,
    private toastController: ToastController
  ) {}
  ngOnInit() {
    if (!this.user.profilePicture) {
      this.user.profilePicture =
        'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
    }
    console.log(this.user);
  }
  async gotToUser(userId: string) {
    const user = await this.storage.get('userId');
    console.log(user);
    if (userId !== user) {
      this.router.navigate(['user', userId]);
    } else {
      const toast = await this.toastController.create({
        message: 'This is you',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
    }
  }
}
