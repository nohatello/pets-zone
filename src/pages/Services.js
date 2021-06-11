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
      <div style={{ backgroundColor: "rgb(209,172,127)", height: "200vh" }}>
        <div className="container">
          <h1 style={{ color: "rgb(244,236,237)" }}>Services</h1>

          <div className="row">
            {this.state.services.map((service) => (
              <div className={"col-3"} key={service.id}>
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
