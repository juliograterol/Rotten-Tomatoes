import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatParam: any;
  message: string = '';
  constructor(
    private fetchApi: FetchApi,
    private storage: Storage,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.chatParam = params['param'];
    });
  }

  ngOnInit() {}

  async fetchChat() {
    try {
      const token = await this.storage.get('token');
      await this.fetchApi.request('POST', this.chatParam, `/chat`, token);
    } catch (error) {
      console.log('Chat Error: ', error);
    }
  }

  onMessageChange(event: any) {
    this.message = event;
  }
}
