function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="card"
        style={{ width: "70rem", marginTop: "100px", border: "none", textAlign:"justify", marging:"10%", fontSize:"20px"}}
      >
        <div className="card-body">
          In a notably classic origin tale, our journey commenced within the
          confines of a bedroom. Situated in Chandigarh, India we are an
          established outsourcing firm. Our core function involves assuming
          responsibilities that clients either lack expertise in or prefer to
          delegate. This strategic approach allows clients to focus on their
          strengths while we proficiently handle tasks beyond their scope.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
