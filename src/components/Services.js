function Services() {
  return (
    <div className="MasterCard">
      <div className="BoxCenter1">
        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Logistics
            </h5>
            <p className="card-text">
              Facilitating US and Canada freight transportation logistics.
            </p>
            <a href={"/services/logistics"} className="btn btn-light">
              Read More
            </a>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Medical Coding
            </h5>
            <p className="card-text">
              Processing healthcare payments and claims.
            </p>
            <a href={"/services/medicalbilling"} className="btn btn-light">
              Read More
            </a>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Remote Assistant
            </h5>
            <p className="card-text">
              Providing off-site administrative support.
            </p>
            <a href={"/services/remoteassistant"} className="btn btn-light">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="BoxCenter2">
        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Digital Marketing
            </h5>
            <p className="card-text">
              Promoting businesses online via various channels.
            </p>
            <a href={"/services/digitalmarketing"} className="btn btn-light">
              Read More
            </a>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Accounting
            </h5>
            <p className="card-text">
              Managing financial records and transactions.
            </p>
            <a href={"/services/accounting"} className="btn btn-light">
              Read More
            </a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Services;
