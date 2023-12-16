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
  constructor(private router: Router) {}

  ngOnInit() {}

  async goToChat(chatId: any) {
    this.router.navigate(['chat', chatId]);
  }
}
