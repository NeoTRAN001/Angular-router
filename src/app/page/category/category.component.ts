import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  products: Product[] = [];
  productId: string | null = null;
  limit: number = 10;
  offset: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if(this.categoryId)
          return this.productsService.getByCategory(this.categoryId, this.limit, this.offset);
        return [];
      })
    )
    .subscribe(data => {
      this.products = data;
    });

    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get("product");
    });
  }

  loadMore(): void {
    if(this.categoryId)
      this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        .subscribe(data => {
          this.products = this.products.concat(data.filter(product => product.images.length > 0));
          this.offset += this.limit;
      });
  }
}
