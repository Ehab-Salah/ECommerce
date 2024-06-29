import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Brand } from '../../Interfaces/brand';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent  implements OnInit{
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
