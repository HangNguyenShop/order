import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

  constructor() { }
  //totalItems: number = 30;
  @Input () tongtruyensangcon:number;
  ngOnInit() {
  }

}
