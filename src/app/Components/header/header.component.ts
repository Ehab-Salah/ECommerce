import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuyProductService } from '../../Services/buy-product.service';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  pCount:number;
  isLogged:boolean;
  constructor(private buyService:BuyProductService, private authService:AuthService ){
    this.pCount=0;
    this.isLogged=false
  }
  ngOnInit(): void {
    this.buyService.countProduct.subscribe(data=>{
      this.pCount=data;
    });
    this.authService.isUserLogged.subscribe(data=>{
      this.isLogged=data;
    });
  }

  logout(){
    this.isLogged=false;
    this.authService.logOut();
  }
}
