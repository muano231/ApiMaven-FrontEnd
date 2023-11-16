import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, map, of } from 'rxjs';
import { API_URL } from 'src/environment/environment';
import { AuthService } from './auth.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public products$: Observable<any> = this.productsSubject.asObservable();
  private productSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public product$: Observable<any> = this.productSubject.asObservable();
  user_token: string;
  private products: Product[] = [];
  private product!: Product;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.user_token = this.authService.getToken() as string;
  }

  /**
   * Read - Get all products
   * @returns Observable<any>
   */
  setProducts(data: any[]): void {
    this.products = data.map(item => new Product(
      item.id,
      item.name,
      item.description,
      item.price,
      item.quantity
    ));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${API_URL}/products`).pipe(
      map((data: any) => {
        this.setProducts(data);
        return this.products; // Retourne les produits transformés
      }),
      catchError((error: any) => {
        console.error('Erreur lors de la sélection des produits :', error);
        return of([] as Product[]); // Renvoie un tableau vide en cas d'erreur
      })
    );
  }

  /**
   * Read - Get product by id
   * @param id number
   * @returns Observable<any>
   */
  setProduct(data: any): void {
    this.product = new Product(
      data.id,
      data.name,
      data.description,
      data.price,
      data.quantity
    )
  }

  getProduct(id: number): Observable<Product | null> {
    return this.http.get(`${API_URL}/products/${id}`).pipe(
      map((data: any) => {
        this.setProduct(data);
        return this.product;
      }),
      catchError((error: any) => {
        console.error('Erreur lors de la sélection du produit :', error);
        return of(null); // Renvoie null en cas d'erreur
      })
    )
  }

}
