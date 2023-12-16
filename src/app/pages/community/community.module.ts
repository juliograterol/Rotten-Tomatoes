import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommunityPageRoutingModule } from './community-routing.module';
import { CommunityPage } from './community.page';
import { CommunityListComponent } from 'src/app/components/community-list/community-list.component';
import { ForumListComponent } from 'src/app/components/forum-list/forum-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CommunityPageRoutingModule],
  declarations: [CommunityPage, CommunityListComponent, ForumListComponent],
})
export class CommunityPageModule {}
