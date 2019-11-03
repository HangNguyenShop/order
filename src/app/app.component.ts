import { Component, OnInit } from "@angular/core";
import { Product } from "./Product";
import { ProductService } from "./product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ShoppingCard";
  tongitems_cha: number = 30;
  tongtien_cha: number = 0;

  arrproduct_cha: Product[]

  constructor(public productService:ProductService){
    this.arrproduct_cha = this.productService.arrproduct_cha;
  }
  handleRemoveProduct(id:number){
    this.productService.removeProduct(id)
  }


  removeProduct(id: number) {
    const index = this.arrproduct_cha.findIndex( phantu => phantu.id === id);
    if (index !== -1) {
      this.arrproduct_cha.splice(index, 1);
    }
    this.TinhTong();
    this.TinhTongTien();
    alert("Xóa sản phẩm thần thánh" + id);
  }

  ThayDoiSoLuong(nhan: any) {
    const index = this.arrproduct_cha.findIndex(
      phantu => phantu.id === nhan.id
    );
    this.arrproduct_cha[index].quantity = nhan.value;

    this.TinhTong();
    this.TinhTongTien();

    console.log(this.arrproduct_cha[index].quantity);
  }

  TinhTong() {
    let a = 0;
    for (const item of this.arrproduct_cha) {
      a += item.price;
    }
    this.tongitems_cha = a;
  }

  TinhTongTien() {
    let a = 0;
    for (const item of this.arrproduct_cha) {
      a += item.quantity * item.price;
    }
    this.tongtien_cha = a;
  }

  ngOnInit() {
    this.TinhTong();
    this.TinhTongTien();
  }
}
