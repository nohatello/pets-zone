import React from "react";
import CartItem from "../Component/CartItem";
import ServicesApi from "../util/factory";
import { connect } from "react-redux";
import { clearCart } from "../store/actions/actions";

class Cart extends React.Component {
  placeOrder = () => {
    this.props.clearCart();
  };
  render() {
    return (
      <div style={{ backgroundColor: "rgb(209,172,127)", height: "100vh" }}>
        <div className="container">
          <h1 style={{ color: "rgb(244,236,237)" }}>Cart</h1>

          <div className="row">
            {this.props.cartItems.map((item, index) => (
              <div className={"col-3"} key={item.service.id}>
                <CartItem item={item} index={index} />
              </div>
            ))}
          </div>

          <br />
          <h3>Total: {this.props.total}</h3>

          <div class="d-grid gap-2">
            <button
              style={{ backgroundColor: "rgb(244,236,237)" }}
              class="btn "
              onClick={this.placeOrder}
              type="button"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.service.price,
      0
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
