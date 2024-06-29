import { Component, OnInit } from '@angular/core';
import { Category } from '../../Interfaces/category';
import { ProductService } from '../../Services/product.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-category-carosel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './category-carosel.component.html',
  styleUrl: './category-carosel.component.scss'
})
export class CategoryCaroselComponent implements OnInit{
  categories:Category[];
  constructor(private http:ProductService){
    this.categories=[];
  }
  ngOnInit(): void {
    this.http.getCategories().subscribe(data=>{
      this.categories=Object(data)["data"];
    });
  }
}