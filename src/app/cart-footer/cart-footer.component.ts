import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})

export class CartFooterComponent implements OnInit {

  constructor() { }
  //totalItems: number = 30;
  @Input () tientruocthue:number;
  ngOnInit() {
  }
}
