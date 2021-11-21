import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Games } from 'src/app/model/games.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-dialog-game-detail',
  templateUrl: './dialog-game-detail.component.html',
  styleUrls: ['./dialog-game-detail.component.css']
})
export class DialogGameDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public cartService: CartService
    ) { }

  ngOnInit(): void {
  }

  addToCart(product: Games) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
