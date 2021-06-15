export default function ServiceItem(props) {
  const { service } = props;
  return (
    <div className="card" style={{ minHeight: "400px" }}>
      <img
        style={{ minHeight: "220px", maxHeight: "220px" }}
        src={service.image}
        class="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{service.name}</h5>
        <p className="card-text">Price: {service.price} LE</p>
        <a
          href={"/services/" + service.id}
          className="btn "
          style={{ backgroundColor: "rgb(244,236,237)" }}
        >
          Details
        </a>
      </div>
    </div>
  );
}
