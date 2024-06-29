import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Interfaces/product';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-product-carosel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-carosel.component.html',
  styleUrl: './product-carosel.component.scss'
})
export class ProductCaroselComponent implements OnInit{
  products:Product[];
  constructor(private http:ProductService){
    this.products=[];
  }
  ngOnInit(): void {
    this.http.getAllProducts().subscribe(data=>{
      this.products=Object(data)["data"];
      console.log("this.products ", this.products);
    });
  }
}