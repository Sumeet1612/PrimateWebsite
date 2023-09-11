import po from "../Images/po.png"

function Home() {
  return (
    <div className="Home">
      <img style={{display:"flex", alignContent:"center"}} className="Logo" src={po} alt="Company Logo" />
    </div>
  );
}

export default Home;
