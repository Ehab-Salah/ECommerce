import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Interfaces/product';
import { ProductService } from '../../Services/product.service';
import { CarouselModule } from 'primeng/carousel';
import { BuyProductService } from '../../Services/buy-product.service';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ CarouselModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit{
  prodId:number;
  productItem!:Product;
  constructor(private prdServise:ProductService ,private activeRoute:ActivatedRoute,
    private buyService:BuyProductService
  ){
    this.prodId=0;
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      this.prodId=params['pId'];
      this.prdServise.getProduct(this.prodId).subscribe(data=>{
        this.productItem=Object(data)["data"];
        console.log( "ddddddddddddd: ", this.productItem);
      });
      console.log(this.prodId);
    });
  }
  addProduct(pId :number){
    //console.log("p id: ",pId);
    this.buyService.addProduct(pId);
  }
}
