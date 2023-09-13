import { motion } from "framer-motion";

function Jobs() {
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      transition={{ delay: "0.3" }}
      className="Jobs"
    >
      <h2 style={{ fontWeight: "bolder" }}>Work from Home</h2>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfmUheMAXtU9y2xegeDPlSt0JnWSXqtjl68n6WPET7rImtrJA/viewform?vc=0&c=0&w=1&flr=0"
        style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
      >
        US Freight Brokerage
      </a>
      <h2 style={{ fontWeight: "bolder" }}>Chandigarh/Mohali</h2>
      <a
        href="https://docs.google.com/forms/d/1Wn_8mly8vd-NK9hIufFq7KLRXTJguvPaC1GfFRhAhWA/viewform?edit_requested=true"
        style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
      >
        Business Development Associate
      </a>
    </motion.div>
  );
}

export default Jobs;
