import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: any;
  myMessage: boolean = false;
  constructor(private storage: Storage) {}

  ngOnInit() {
    this.checkMessage();
  }

  async checkMessage() {
    const userId = await this.storage.get('userId');
    if (userId === this.message.senderId?._id) {
      this.myMessage = true;
    } else {
      this.myMessage = false;
    }
    if (this.message.senderId.profilePicture === '') {
      this.message.senderId.profilePicture =
        'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
    }
  }
}
