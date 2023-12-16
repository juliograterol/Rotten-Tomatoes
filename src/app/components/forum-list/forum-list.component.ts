import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss'],
})
export class ForumListComponent implements OnInit {
  @Input() forum: any;
  @Input() type: string = '';
  constructor(
    private router: Router,
    private storage: Storage,
    private fetchApi: FetchApi
  ) {}

  ngOnInit() {}

  async goToChat(id: any) {
    try {
      const chatParams = {
        members: [null],
        chatId: id,
      };
      const token = await this.storage.get('token');
      const request = await this.fetchApi.request(
        'POST',
        chatParams,
        `/chat`,
        token
      );
      console.log(request);
      this.router.navigate(['chat', request.data.chat._id]);
    } catch (error) {
      console.log('Chat Error: ', error);
    }
  }
}
