import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Category } from '../../Interfaces/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
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
