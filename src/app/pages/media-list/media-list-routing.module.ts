import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaListPage } from './media-list.page';

const routes: Routes = [
  {
    path: '',
    component: MediaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaListPageRoutingModule {}
