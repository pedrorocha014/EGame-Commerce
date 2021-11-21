import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Games } from 'src/app/model/games.model';
import { CartService } from 'src/app/service/cart.service';
import { GamesService } from 'src/app/service/games.service';
import { DialogGameDetailComponent } from '../dialog-game-detail/dialog-game-detail.component';


@Component({
  selector: 'app-flex-layout-grid',
  templateUrl: './flex-layout-grid.component.html',
  styleUrls: ['./flex-layout-grid.component.css']
})
export class FlexLayoutGridComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    public gamesData: GamesService,
    public cartService: CartService 
    ) { }

  ngOnInit(): void {
  }

  openDialog(currentGame: Games): void {
    this.dialog.open(DialogGameDetailComponent, {data: {game: currentGame}});
  }

  addToCart(product: Games) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
