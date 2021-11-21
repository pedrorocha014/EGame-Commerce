import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CartService } from 'src/app/service/cart.service';
import { Games } from '../../model/games.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(private service: CartService) { }

  @ViewChild(MatTable) table: MatTable<Games>;

  ngOnInit(): void {
  }

  items = this.service.getItems();
  totalValue = this.service.getTotalCost();
  displayedColumns: string[] = ['item', 'cost', 'remove']
  
  removeRow(game: Games): void{
    this.items = this.service.removeFromCart(game);
    this.totalValue = this.service.getTotalCost();
    this.table.renderRows();
  }

  confirm(): void{
    window.alert('Purchase completed successfully!');
    this.items = this.service.clearCart();
    this.totalValue = this.service.getTotalCost();
    this.table.renderRows();
  }
}
