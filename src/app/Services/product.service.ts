import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl:string;
  constructor(private http:HttpClient) { 
    this.baseUrl="https://ecommerce.routemisr.com/api/v1";
    
  }

  getAllProducts():Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}/products`);
  }
  getProduct(pId:any):Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}/products/${pId}`);
  }
  getCategories():Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}/categories`);
  }
  getBrands():Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}/brands`);
  }
 
}
