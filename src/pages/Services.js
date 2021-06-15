import React from "react";
import ServiceItem from "../Component/ServiceItem";
import ServicesApi from "../util/factory";

export default class Services extends React.Component {
  state = {
    services: [],
  };

  componentDidMount() {
    ServicesApi.getAll().then((data) => {
      this.setState({
        services: data,
      });
    });
  }

  render() {
    return (
      <div
        className="services"
        style={{ backgroundColor: "rgb(244,236,237)", height: "180vh" }}
      >
        <div className="container">
          <h1 style={{ color: "rgb(209,172,127)" }}>Services</h1>

          <div className="row">
            {this.state.services.map((service) => (
              <div
                style={{
                  paddingBottom: "17px",
                }}
                className={"col-3"}
                key={service.id}
              >
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
