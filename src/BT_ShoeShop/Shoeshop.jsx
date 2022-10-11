import React, { Component } from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";
import ShoeDetail from "./ShoeDetail";
import Cart from "./Cart";

export default class Shoeshop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //state lưu trữ dư liệu của sản phẩm dc chọn
      product: {},

      //state lưu trữ danh sách các sản phẩm trong giỏ hàng
      carts: [],
    };
  }

  //Nút thanh toán
  handlePurchase = () => {
    this.setState({carts: []});
    alert("Cảm ơn quý khách đã mua hàng")
  }

  //Chức năng tăng giảm số lượng trong Cart
  handleChangeQuantity = (productId, quantity) => {
    const index = this.state.carts.findIndex((item) => item.id === productId);
    const newCarts = [...this.state.carts];
    if (newCarts[index].quantity === 1 && quantity === -1) {
      newCarts.splice(index, 1);
      this.setState({ carts: newCarts });
    } else {
      newCarts[index].quantity += quantity;
      this.setState({ carts: newCarts });
    }
  };

  handleAddToCart = (shoe) => {
    //Kiểm tra xem sản phẩm đã có trong mảng giỏ hàng carts hay chưa
    const index = this.state.carts.findIndex((item) => item.id === shoe.id);

    if (index === -1) {
      //Trường hợp chưa có trong mảng giỏ hàng carts thì index sẽ là -1

      this.setState((state) => ({
        carts: [...state.carts, { ...shoe, quantity: 1 }],
      }));
    } else {
      //Trường hợp đã có trong mảng giỏ hàng carts => tăng số lượng lên 1 đơn vị

      const newCarts = [...this.state.carts];
      newCarts[index].quantity += 1;
      this.setState({ carts: [...newCarts] });
    }
  };

  handleDetail = (shoe) => {
    //shoe là sản phẩm dc nhấn vào nút Detail
    this.setState({ product: shoe });
  };

  render() {
    return (
      <div>
        <h1 className="text-center mb-5">Shoes Shop</h1>
        <div className="container">
          <div className="d-flex justify-content-between mb-4">
            <div></div>
            <button
              className="btn btn-primary text-right"
              data-bs-toggle="modal"
              data-bs-target="#modalCart"
            >
              Cart
            </button>
          </div>
          <ShoeDetail product={this.state.product} />
          <ShoeList
            products={data}
            onClick={this.handleDetail}
            onAddToCart={this.handleAddToCart}
          />
          <Cart carts={this.state.carts} onChange={this.handleChangeQuantity} onPurchase={this.handlePurchase}/>
        </div>
      </div>
    );
  }
}
