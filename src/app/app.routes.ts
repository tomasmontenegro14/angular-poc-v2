import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
    },
    {
        path: 'cliente',
        loadComponent: () => import('./cliente/cliente.component').then((m) => m.ClienteComponent),
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotfoundComponent,
    },
];
