import po from "../Images/po.png"
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div 
    initial={{opacity:"0"}}
    animate={{opacity:"1"}}
    transition={{delay:"0.3"}}
    className="Home">
      <img style={{display:"flex", alignContent:"center", height:"500px", width:"500px"}} className="Logo" src={po} alt="Company Logo" />
    </motion.div>
  );
}

export default Home;
