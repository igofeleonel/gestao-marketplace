import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Products } from './pages/products/products';
import { NewProduct } from './pages/new-product/new-product';
import { LoginComponent } from './pages/login/login';
import { authGuard } from './guards/auth-guard';
import { loginAuthGuard } from './guards/login-auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginAuthGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'new-product',
        component: NewProduct,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
