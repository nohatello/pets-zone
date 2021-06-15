import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./CartIcon.css";

function CartIcon(Props) {
  return (
    <div id="cart-icon">
      <Link to="/cart">
        <i
          style={{
            paddingRight: "30px",
          }}
          className="fa fa-shopping-cart"
        ></i>
        <span
          style={{
            marginRight: "30px",
          }}
          className="badge bg-danger"
        >
          {Props.totalQuantity}
        </span>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalQuantity: state.cart.reduce(
      (total, item) => total + parseInt(item.quantity),
      0
    ),
  };
};

export default connect(mapStateToProps)(CartIcon);
