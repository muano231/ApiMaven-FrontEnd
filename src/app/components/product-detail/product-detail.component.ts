import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product;
  id!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduct(this.id);
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product: Product | null) => {
        if (product !== null && product !== undefined) {
          this.product = product;
          console.log('Product:', this.product);
        }
      },
      error: (error: any) => {
        console.error('Erreur lors de la sélection du produit:', error);
      }
    })
  }

  // getProducts(id: number): void {
  //   this.productService.getProducts().subscribe({
  //     next: (products: Product[]) => {
  //       this.productList = products;
  //       console.log('Products:', this.productList);
  //     },
  //     error: (error: any) => {
  //       console.error('Erreur lors de la récupération des produits:', error);
  //     }
  //   });
  // }

}
