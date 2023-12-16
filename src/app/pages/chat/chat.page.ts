import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatParam: any;
  message: string = '';
  allMessages: any[] = [];
  public socket: any;
  public id: string = '';

  constructor(
    private fetchApi: FetchApi,
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.chatParam = params['param'];
    });
    this.socket = io('https://rottenback-production.up.railway.app');
   
  }

  ngOnInit() {
    this.fetchChat();
    this.socket.emit('joinRoom', { chatId: this.chatParam });
    this.socket.on('message', (data: any) => {
      console.log('se recibio de socket', data);
      this.allMessages.push(data);
    });
  }

  async fetchChat() {
    try {
      const token = await this.storage.get('token');
      const request = await this.fetchApi.request(
        'POST',
        { chatId: this.chatParam },
        `/chat`,
        token
      );
      this.allMessages = request.data.messages;
      console.log('llego', request);
    } catch (error) {
      console.log('Chat Error: ', error);
    }
  }

  onMessageChange(event: any) {
    this.message = event;
  }

  async sendMessage() {
    if (this.message !== '') {
      console.log('me ejecuto');
      const myUserId = await this.storage.get('userId');
      const daton = {
        senderId: myUserId,
        chatId: this.chatParam,
        content: this.message,
        sentAt: new Date(),
      };
      console.log(daton);
      this.socket.emit('sendMessage', daton);

      this.message = '';
    }
  }
  goBack() {
    this.router.navigate(['tabs/community']);
  }
}
