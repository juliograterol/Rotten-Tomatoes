import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import FetchApi from 'src/app/services/fetchapi.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent implements OnInit {
  @Input() user: any;
  picture: string = '';
  constructor(private fetchApi: FetchApi, private router: Router) {}
  ngOnInit() {
    if (!this.user.profilePicture) {
      this.user.profilePicture =
        'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
    }
    console.log(this.user);
  }
  async gotToUser(userId: string) {
    // this.router.navigateByUrl('media');
    this.router.navigate(['user', userId]);
  }
}
