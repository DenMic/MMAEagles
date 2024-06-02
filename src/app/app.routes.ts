import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about-us',
    loadComponent: () =>
      import('./feature/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'bjj',
    loadComponent: () =>
      import('./feature/bjj/bjj.component').then((m) => m.BjjComponent),
  },
  {
    path: 'mma',
    loadComponent: () =>
      import('./feature/mma/mma.component').then((m) => m.MmaComponent),
  },
  {
    path: 'kids',
    loadComponent: () =>
      import('./feature/kids/kids.component').then((m) => m.KidsComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./feature/contacts/contacts.component').then(
        (m) => m.ContactsComponent
      ),
  },

  {
    path: '',
    redirectTo: 'about-us',
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./feature/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
];
