import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

import { HighlightDirective } from './directives/highlight.directive';

import { SwiperModule } from 'swiper/angular';

const declarations: any = [
  ImgComponent,
  ProductComponent,
  ProductsComponent,
  ReversePipe,
  TimeAgoPipe,
  HighlightDirective,
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: declarations
})
export class SharedModule { }
