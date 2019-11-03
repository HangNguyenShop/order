import { Component, OnInit, Input,Output,EventEmitter  } from '@angular/core';


import { Product } from '../Product';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component implements OnInit {
  constructor() {}
  // product1: Product = {
  //   id: 1,
  //   name: 'May Tinh 01',
  //   description: 'May tinh xin nhat thien ha',
  //   image:
  //     'https://sohanews.sohacdn.com/thumb_w/660/2019/11/1/t5-1572586279225536945952-crop-15725865029241771429457.jpg',
  //   price: 10500000,
  //   quantity: 5
  // };

  // product2: Product = {
  //   id: 2,
  //   name: 'May Tinh 02',
  //   description: 'May tính lởm nhất thế giới',
  //   image: 'https://www.gap.co.jp/webcontent/0017/233/125/cn17233125.jpg',
  //   price: 1000000,
  //   quantity: 10
  // };

  // arrproduct: Product[] = [
  //   {
  //     id: 1,
  //     name: 'May Tinh 01',
  //     description: 'May tinh xin nhat thien ha',
  //     image:
  //       'https://sohanews.sohacdn.com/thumb_w/660/2019/11/1/t5-1572586279225536945952-crop-15725865029241771429457.jpg',
  //     price: 10500000,
  //     quantity: 5
  //   },
  //   {
  //     id: 2,
  //     name: 'May Tinh 02',
  //     description: 'May tính lởm nhất thế giới',
  //     image: 'https://www.gap.co.jp/webcontent/0017/233/125/cn17233125.jpg',
  //     price: 1000000,
  //     quantity: 10
  //   }
  // ];
@Input() sanphamtruyensangcon: [];

@Output() xoaSanpham = new EventEmitter();
@Output() suKienThayDoiSoLuong = new EventEmitter();


  ngOnInit() {}
  removeProduct(id:number){
  this.xoaSanpham.emit(id);
  }
  changeQuantity(id:number, event:any) {
    this.suKienThayDoiSoLuong.emit(
      {
        id: id,
        value: event.target.value
      }
    );
    
  }
}



