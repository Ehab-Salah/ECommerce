import { Component, OnInit, Pipe } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Interfaces/product';
import { CardModule } from 'primeng/card';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { BuyProductService } from '../../Services/buy-product.service';
@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CardModule,CurrencyPipe],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit{
  products:Product[];
  constructor(private productService:ProductService, private router:Router, 
    private buyService:BuyProductService){
    this.products=[];
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.products=Object(data)["data"];
      //console.log("products:  ",this.products);
    });
    
  }
  showProduct(pId :number){
    //console.log("p id: ",pId);
    this.router.navigate(['/ProductDetails',pId]);
  }
  addProduct(pId :number){
    //console.log("p id: ",pId);
    this.buyService.addProduct(pId);
  }

}
