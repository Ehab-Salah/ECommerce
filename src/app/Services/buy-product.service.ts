import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class BuyProductService {
  countProduct:BehaviorSubject<number>;
  ProductsAdded:number[];

  constructor() {
    this.countProduct=new BehaviorSubject<number>(0);
    this.ProductsAdded=[];
   }
   addProduct(pId:number){
    this.ProductsAdded.push(pId);
    this.countProduct.next(this.countProduct.getValue()+1);
   }
}
