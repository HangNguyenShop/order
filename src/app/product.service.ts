import { Injectable } from "@angular/core";
import { Product } from "./Product";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  arrproduct_cha: Product[] = [
    {
      id: 1,
      name: "May Tinh 01",
      description: "Gan ben Service",
      image:
        "https://sohanews.sohacdn.com/thumb_w/660/2019/11/1/t5-1572586279225536945952-crop-15725865029241771429457.jpg",
      price: 100000,
      quantity: 5
    },
    {
      id: 2,
      name: "May Tinh 02",
      description: "Gan ben Service",
      image: "https://www.gap.co.jp/webcontent/0017/233/125/cn17233125.jpg",
      price: 200000,
      quantity: 10
    }
  ];

  removeProduct(id: number) {
    const index = this.arrproduct_cha.findIndex(phantu => phantu.id === id);
    if (index !== -1) {
      this.arrproduct_cha.splice(index, 1);
    }
    //this.TinhTong();
    //this.TinhTongTien();
    alert("Xóa sản phẩm thần thánh" + id);
  }

  //findById(id:number):Product{
}
