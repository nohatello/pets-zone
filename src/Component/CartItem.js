import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

function ServiceItem(props) {
  const { item, index } = props;
  const { service } = item;

  return (
    <div className="card" style={{ minHeight: "400px" }}>
      <img
        src={service.image}
        style={{ minHeight: "220px", maxHeight: "220px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{service.name}</h5>
        <p className="card-text">
          Price {service.price}LE
          <br />
          Quantity: {item.quantity}
          <br />
          Total: {item.quantity * service.price}
        </p>
        <button
          onClick={() => props.removeFromCart(index)}
          href="#"
          className="btn btn-danger"
        >
          <i className="fa fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => dispatch(removeFromCart(index)),
  };
};

export default connect(null, mapDispatchToProps)(ServiceItem);
