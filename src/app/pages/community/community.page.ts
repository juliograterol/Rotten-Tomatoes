import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  searchText: string = '';
  userList: any[] = [];
  constructor(private fetchApi: FetchApi, private storage: Storage) {}

  ngOnInit() {}

  async onSearchChange(event: any) {
    this.searchText = event;
    console.log(this.searchText);
    this.fetchUsers();
  }
  async fetchUsers() {
    try {
      const userId = await this.storage.get('userId');
      let endpoint = `/user/data/allUsers/${userId}`;
      if (this.searchText !== '') {
        endpoint = `/user/search/${userId}/${this.searchText}`;
      } else {
        endpoint = `/user/data/allUsers/${userId}`;
      }
      const token = await this.storage.get('token');
      // Realiza la solicitud con el token y obtén la lista de usuarios
      const response = await this.fetchApi.request(
        'GET',
        null,
        endpoint,
        token
      );
      if (response && response.data && Array.isArray(response.data)) {
        this.userList = response.data; // Asigna la lista de usuarios a userList
        console.log(this.userList);
      }
    } catch (error) {}
  }
  async fetchForums() {
    console.log('working forums search');
  }
}
