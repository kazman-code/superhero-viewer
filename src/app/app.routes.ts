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
    path: 'heroes',
    loadComponent: () => import('./pages/heroes/heroes.page').then(m => m.HeroesPage)
  },
  {
    path: 'hero-detail/:id',
    loadComponent: () => import('./pages/hero-detail/hero-detail.page').then(m => m.HeroDetailPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('./pages/favourites/favourites.page').then(m => m.FavouritesPage)
  },
{
  path: 'settings',
  loadComponent: () =>
    import('./pages/settings/settings.page').then(m => m.SettingsPage)
}


 
  
];
