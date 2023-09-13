import { motion } from "framer-motion";

function Contactus() {
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      transition={{ delay: "0.3" }}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="card"
        style={{
          width: "70rem",
          marginTop: "100px",
          border: "none",
          textAlign: "center",
          marging: "10%",
          fontSize: "20px",
        }}
      >
        <div className="card-body">
          Want to work with us?
          <br />
          <br />
          Please send an email to{" "}
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="mailto: contact@primateoutsourcing.in"
          >
            <strong>contact@primateoutsourcing.in </strong>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contactus;
