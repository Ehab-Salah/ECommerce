import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ProductService } from '../../Services/product.service';
import { Brand } from '../../Interfaces/brand';

@Component({
  selector: 'app-brands-carosel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './brands-carosel.component.html',
  styleUrl: './brands-carosel.component.scss'
})
export class BrandsCaroselComponent implements OnInit{
  brands:Brand[];
  constructor(private http:ProductService){
    this.brands=[];
  }
  ngOnInit(): void {
    this.http.getBrands().subscribe(data=>{
      this.brands=Object(data)["data"];
    });
  }
}