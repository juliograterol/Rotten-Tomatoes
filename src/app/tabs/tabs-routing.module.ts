import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        loadChildren: () =>
          import('../pages/discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
      },

      {
        path: 'movies',
        loadChildren: () =>
          import('../pages/movies/movies.module').then(
            (m) => m.MoviesPageModule
          ),
      },
      {
        path: 'tv',
        loadChildren: () =>
          import('../pages/tv/tv.module').then((m) => m.TvPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },

      {
        path: 'chats',
        loadChildren: () =>
          import('../pages/chats/chats.module').then((m) => m.ChatsPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/discover',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/discover',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
