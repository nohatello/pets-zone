import React from "react";
import { getById } from "../util/factory";
import { addToCart } from "../store/actions/actions";
import { connect } from "react-redux";

class Service extends React.Component {
  state = {
    loading: true,
    quantity: 0,
    service: {},
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    getById(parseInt(id)).then((service) => {
      this.setState({
        service,
        loading: false,
      });
    });
  }

  handleQuantity = (event) => {
    const value = event.target.value;
    if (value < 0) return;

    this.setState({
      quantity: value,
    });
  };

  addToCart = (service) => {
    this.props.addToCart(service, this.state.quantity);
  };

  render() {
    if (this.state.loading) return "loading ..";

    const service = this.state.service;
    const quantity = this.state.quantity;

    return (
      <div style={{ backgroundColor: "rgb(209,172,127)", height: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                style={{ height: "100%", width: "100%" }}
                src={service.image}
              />
            </div>
            <div className="col-6">
              <h1>{service.name}</h1>
              <br />

              <p>Price : {service.price} LE</p>
              <br />

              <p>{this.state.service.description}</p>
              <br />
              <input
                type="number"
                value={quantity}
                onChange={this.handleQuantity}
              />
              <br />

              <br />
              <p>Total : {quantity * service.price}</p>

              <button
                className="btn btn-primary"
                onClick={() => this.addToCart(service)}
              >
                {" "}
                Add to Cart{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (serviceInfo, quantity) =>
      dispatch(addToCart(serviceInfo, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(Service);
