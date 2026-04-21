import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'comics',
    loadComponent: () => import('./pages/comics/comics.page').then(m => m.ComicsPage)
  },
  {
    path: 'comic-detail',
    loadComponent: () => import('./pages/comic-detail/comic-detail.page').then(m => m.ComicDetailPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('./pages/favourites/favourites.page').then(m => m.FavouritesPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPage)
  },
];
