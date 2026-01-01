import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop').then(m => m.Shop)
  },
  {
    path: 'new-arrivals',
    loadComponent: () => import('./pages/new-arrivals/new-arrivals').then(m => m.NewArrivals)
  },
  {
    path: 'sales',
    loadComponent: () => import('./pages/sales/sales').then(m => m.Sales)
  },
  {
    path: 'journal',
    loadComponent: () => import('./pages/journal/journal').then(m => m.Journal)
  },
  {
    path: 'stores',
    loadComponent: () => import('./pages/stores/stores').then(m => m.Stores)
  },
  { path: '**', redirectTo: '' }
];
