import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      transition={{ delay: "0.3" }}
      className="MasterCard"
    >
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
            <Link to="/services/logistics" className="btn btn-light">
              Read More
            </Link>
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
            <Link to="/services/medicalbilling" className="btn btn-light">
              Read More
            </Link>
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
            <Link to="/services/remoteassistant" className="btn btn-light">
              Read More
            </Link>
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
            <Link to="/services/digitalmarketing" className="btn btn-light">
              Read More
            </Link>
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
            <Link to="/services/accounting" className="btn btn-light">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <br />
    </motion.div>
  );
}

export default Services;
