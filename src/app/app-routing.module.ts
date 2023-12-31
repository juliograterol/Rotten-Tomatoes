import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./pages/profile/edit-profile/edit-profile.module').then(
        (m) => m.EditProfilePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'media/:type',
    loadChildren: () =>
      import('./pages/media-list/media-list.module').then(
        (m) => m.MediaListPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'media-view/:type/:mediaId',
    loadChildren: () =>
      import('./pages/media-view/media-view.module').then(
        (m) => m.MediaViewPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'user/:userId',
    loadChildren: () =>
      import('./pages/profile-view/profile-view.module').then(
        (m) => m.ProfileViewPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'review',
    loadChildren: () =>
      import('./pages/review/review.module').then((m) => m.ReviewPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'chat/:param',
    loadChildren: () =>
      import('./pages/chat/chat.module').then((m) => m.ChatPageModule),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
