import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './website/page/home/home.component';
import { NotFoundComponent } from './website/page/not-found/not-found.component';
import { CategoryComponent } from './website/page/category/category.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { MyCartComponent } from './website/page/my-cart/my-cart.component';
import { LoginComponent } from './website/page/login/login.component';
import { RegisterComponent } from './website/page/register/register.component';
import { RecoveryComponent } from './website/page/recovery/recovery.component';
import { ProfileComponent } from './website/page/profile/profile.component';
import { ProductDetailComponent } from './website/page/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
