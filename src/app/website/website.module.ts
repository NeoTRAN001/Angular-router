import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { MyCartComponent } from './page/my-cart/my-cart.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { ProfileComponent } from './page/profile/profile.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
